/**
 * 一次性修复「伪装成 .webp 的 PNG」脚本
 *
 * 背景（2026-10-05，台账 P-07）：public/images/aisolution/ 下 4 个 .webp 文件
 * 实际是 PNG 字节（1672x941，合计 5.9 MiB），浏览器按扩展名以 WebP 解码
 * 却能显示，但体积是真实 WebP 的 6-8 倍。sharp 读取 metadata 即可识别。
 *
 * 处理方式：就地重编码为真 WebP（文件名不变，引用零改动）。
 * 沿用《代码规范与优化方案》的两道否决闸门：
 *   1. 转完比原图大 → 丢弃
 *   2. 收益低于 minSavingPercent → 丢弃
 *
 * 使用方式: node scripts/fix-fake-webp.js
 * 扫描范围: 传入目录参数（默认 public/images/aisolution）
 */

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const CONFIG = {
  quality: 80,
  minSavingPercent: 15,
}

/** 同步扫描 + 回调链处理，逐文件输出结果 */
function main() {
  const dir = process.argv[2] || 'public/images/aisolution'
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.webp'))
    .sort()

  const queue = files.slice()
  const results = []

  function next() {
    if (!queue.length) {
      console.log('========== 汇总 ==========')
      results.forEach((r) => console.log(r))
      console.log(`共检查 ${files.length} 个，转换 ${results.length} 个`)
      return
    }
    const file = queue.shift()
    const src = path.join(dir, file)
    // 只读头信息识别真实格式，PNG 字节才是目标
    sharp(src)
      .metadata()
      .then((m) => {
        if (m.format !== 'png') {
          console.log(`跳过 ${file}（已是 ${m.format}）`)
          next()
          return
        }
        const before = fs.statSync(src).size
        const tmp = `${src}.tmp`
        sharp(src)
          .webp({ quality: CONFIG.quality })
          .toFile(tmp)
          .then((info) => {
            const after = info.size
            const gain = (1 - after / before) * 100
            if (after >= before) {
              fs.unlinkSync(tmp)
              results.push(`${file}: 变大，丢弃（${before} -> ${after}）`)
            } else if (gain < CONFIG.minSavingPercent) {
              fs.unlinkSync(tmp)
              results.push(`${file}: 收益 ${gain.toFixed(1)}% < ${CONFIG.minSavingPercent}%，丢弃`)
            } else {
              fs.renameSync(tmp, src)
              results.push(`${file}: ${before} -> ${after}（省 ${gain.toFixed(1)}%）✅ 已替换`)
            }
          })
          .catch((e) => {
            results.push(`${file}: 转换失败 ${e.message}`)
            if (fs.existsSync(tmp)) fs.unlinkSync(tmp)
          })
          .finally(() => {
            console.log(results[results.length - 1])
            next()
          })
      })
      .catch((e) => {
        console.log(`${file}: 读取失败 ${e.message}`)
        next()
      })
  }

  next()
}

main()
