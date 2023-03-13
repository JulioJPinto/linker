function Links({ title, icon, link }: Links) {
    return (
        <a href=${link} className="flex flex-row" >
            <img src= ${icon} />
            <h4>${title}</h4>
        </a >
    )
}