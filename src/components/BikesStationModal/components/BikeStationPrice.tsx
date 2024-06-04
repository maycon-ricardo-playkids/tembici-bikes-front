import Image from 'next/image'

type PriceProps = {
  type: 'mech' | 'electric'
  mech: number
  electric: number
  tariff: string
}

export const BikeStationPrice = ({
  type,
  mech,
  electric,
  tariff
}: PriceProps) => {
  function serializeTitle() {
    if (type == 'electric') {
      return 'Retirada de Bike elétrica'
    }
    return 'Retirada de Bike comum'
  }

  function calculateTariff() {
    const price = getPrice()

    if (price === 0) {
      return 'none'
    } else if (price > 0 && price <= 3) {
      return 'low'
    } else if (price > 3 && price <= 7) {
      return 'median'
    } else if (price > 7) {
      return 'high'
    } else {
      return 'invalid'
    }
  }

  function getPrice() {
    if (type == 'electric') {
      return electric
    }
    return mech
  }

  function getPriceCurrency(price: number) {
    const formattedPrice: string = price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    return formattedPrice
  }

  return (
    <div className="flex flex-row justify-between items-center bg-pearlgray p-4 mb-6 rounded-2xl">
      <div className="flex flex-rox w-[35%]">
        <Image
          src="/images/button/electric.svg"
          alt="bike eletrica"
          width={32}
          height={32}
        />
        <p className="font-normal text-[14px] leading-4 ml-2">
          {serializeTitle()}
        </p>
      </div>
      {calculateTariff() === 'high' && (
        <div className="w-[30%]">
          <p className="font-semibold	text-ruby text-[24px]">
            {getPriceCurrency(getPrice())}
          </p>
        </div>
      )}
      {calculateTariff() === 'median' && (
        <div className="w-[30%]">
          <p className="font-semibold	text-gold text-[24px]">
            {getPriceCurrency(getPrice())}
          </p>
        </div>
      )}
      {calculateTariff() === 'low' && (
        <div className="w-[30%]">
          <p className="font-semibold	text-sapphire text-[24px]">
            {getPriceCurrency(getPrice())}
          </p>
        </div>
      )}
      {calculateTariff() === 'none' && (
        <div className="w-[30%]">
          <p className="font-semibold	text-emerald text-[24px]">
            {getPriceCurrency(getPrice())}
          </p>
        </div>
      )}

      <div className="flex flex-col w-[15%]">
        <Image
          src={`/images/tariff/${calculateTariff()}-tariff.svg`}
          alt="bike eletrica"
          width={40}
          height={32}
        />
      </div>
    </div>
  )
}
