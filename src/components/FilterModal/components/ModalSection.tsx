type ModalSectionProps = {
  types: string
  answer: string
  options: string[]
  values: string[]
  setters: any
  indexes: number
  states: any[]
}

export const ModalSection = ({
  answer,
  options,
  values,
  setters,
  indexes,
  states
}: ModalSectionProps) => {
  // function handleSelected(type, index) {

  //   setCity(values[index])
  // }

  return (
    <div className="border-t-[1px] border-t-steel font-main font-bold px-4 mt-4 py-4 flex flex-col gap-4">
      <p>{answer}</p>
      <div className="flex gap-4 overflow-x-scroll overflow-ellipsis whitespace-nowrap scrollbar-hide">
        {options.map((option, index) => {
          return (
            <span
              className={`border-[1px] border-cooper px-6 py-2 rounded-full flex-wrap ${states[indexes] === values[index] && 'bg-cooper text-pearl border-rust'}`}
              key={index}
              onClick={() => {
                setters[indexes](values[index])
              }}
            >
              {option}
            </span>
          )
        })}
      </div>
    </div>
  )
}
