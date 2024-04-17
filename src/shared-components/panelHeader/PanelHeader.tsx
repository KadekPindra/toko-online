import { Children } from "react";

type Propstypes = {
    title: string
    icon: string;
    children?: React.ReactNode
}

const PanelHeader = (props : Propstypes) => {
    const {title, icon, children} = props
    return(
        <div className="w-full h-20 border shadow-xl flex justify-between items-center py-5 px-10 bg-white">
            <div className="flex items-center gap-4 font-semi-bold text-xl">
                <i className={`bx ${icon} text-3xl text-blue-500`}/>
                {title}
            </div>

            <div className="flex items-center">
                {children}
            </div>
        </div>
    )
}

export default PanelHeader