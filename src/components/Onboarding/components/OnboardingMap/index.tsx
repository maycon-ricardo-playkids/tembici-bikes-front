import Image from 'next/image'
import { BottomTabs } from '../BottomTabs'
import { TipModal } from '../OnboardingTipModal/TipModal'
import { SearchInput } from '../SearchInput'
import { TargetButton } from '../TargetButton/indext'
const Reveal = require('react-reveal/Reveal')

export const OnboardingMap = () => {
  return (
    <Reveal>
      <div className="relative w-[100vw] h-[100vh]">
        <div className="flex md:hidden">
          <Image
            src="/images/onboarding/map-mock.png"
            alt="map"
            layout="fill"
          />
        </div>
        <div className="hidden md:block">
          <Image src="/images/onboarding/map-lg.png" alt="map" layout="fill" />
        </div>
        <div className="absolute top-10 w-[100%] px-5 md:flex md:justify-center">
          <SearchInput />
        </div>
        <div className="absolute bottom-0 w-[100%]">
          <BottomTabs />
        </div>
      </div>
      <div className="absolute top-0">
        <TipModal />
      </div>
    </Reveal>
  )
}
