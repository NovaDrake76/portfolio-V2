const SideItem = ({ data }) => {
  return (
    <div className="flex items-end justify-center w-1/6 h-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center ">
          {data.map((item) => (
            <a
              href="{item.link}"
              className="p-3 text-2xl transition-all duration-500 min-h-[48px] text-primary hover:text-secondary hover:pt-2"
            >
              {item.title === "Email" ? (
                <span
                  className="text-xl hover:mb-2 "
                  style={{
                    writingMode: "vertical-lr",
                    transition: "margin-bottom 0.5s",
                  }}
                >
                  {item.link}
                </span>
              ) : (
                item.icon
              )}
            </a>
          ))}
        </div>
        <div className="w-[1px] h-[100px] bg-primary" />
      </div>
    </div>
  )
}

export default SideItem
