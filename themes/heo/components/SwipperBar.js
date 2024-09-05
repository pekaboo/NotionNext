import { siteConfig } from '@/lib/config' 
import CONFIG from '../config' 
import SwipeImage from './SwipeImage'

/**
 * 通知横幅
 */
export function SwipperBar() {
  let swipers = siteConfig('HEO_SWIPPER_BAR', null, CONFIG)
  if (typeof swipers === 'string') {
    swipers = JSON.parse(swipers)
  }
  if (!swipers || swipers?.length === 0) {
    return <></>
  }
  
  return (
    <SwipeImage items={swipers} />
  )
}
