import Image from 'next/image'

type SearchInputProps = {
  openFilters: () => void
  searchParam: string
  setter: any
  searchFunction: any
}

export const SearchInput = ({
  openFilters,
  searchParam,
  setter,
  searchFunction
}: SearchInputProps) => {
  return (
    <div className="bg-pearl w-[100%] h-[111px] shadow-lg rounded-xl relative max-w-[600px]">
      <div className="flex flex-col items-center justify-between h-full py-4">
        <h3 className="font-main font-semibold text-[18px]">
          Pesquisa de Preço Dinâmico
        </h3>
        <span className="absolute top-[4.1rem] left-7" onClick={searchFunction}>
          <Image
            src="/images/search/search.svg"
            alt="buscar"
            width={20}
            height={20}
          />
        </span>
        <div className="flex justify-between px-4 items-center gap-4 w-full">
          <input
            type="text"
            className="bg-silver rounded-md w-[85%] h-[40px] pl-10 font-main"
            placeholder="Pesquise uma estação aqui"
            value={searchParam}
            onChange={(e) => {
              setter(e.target.value)
              searchFunction(e.target.value)
            }}
          />
          <button className="flex items-center" onClick={openFilters}>
            <Image
              src="/images/search/filter.svg"
              alt="buscar"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
