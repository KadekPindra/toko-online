type Buttontypes = {
    type: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: "contained" | "text" | "outlined";
    color?: "default" | "primary" | "secondary" | "danger";
}

const Button = (props: Buttontypes) => {
    const {type, onClick, children, className, variant = "contained", color = "default"} = props;

    const containedOrange = "bg-orange-600 hover:bg-orange-500 active:bg-orange-700 ";
    const containedBlue = "bg-blue-600 hover:bg-blue-500 active:bg-blue-700 ";
    const containedRed = "bg-red-600 hover:bg-red-500 active:bg-red-700 ";
    const containedBlack = "bg-black hover:bg-slate-800 active:bg-slate-900 ";

    const textWhite = "text-white";
    const textGray = "text-gray-500 hover:text-gray-600 active:text-gray-700";
    const textOrange = "text-orange-800 hover:text-orange-700 active:text-orange-900"; 
    const textBlue = "text-blue-500 hover:text-blue-600 active:text-blue-700";
    const textRed = "text-red-500 hover:text-red-600 active:text-red-700";

    const outlined = "border bg-white";
    const outlinedOrange = `text-orange-800 border-orange-800 hover:border-orange-700 active:border-orange-900`;
    const outlinedBlack = `text-black border-black hover:border-black active:border-black`;
    const outlinedBlue = `text-blue-500 border-blue-500 hover:border-blue-600 active:border-blue-700`;
    const outlinedRed = `text-red-500 border-red-500 hover:border-red-600 active:border-red-700`;

    const styles: string[] = [];

    if (variant == "contained") {
        if (color == "default") styles.push(containedBlue, textWhite);
        if (color == "primary") styles.push(containedOrange , textWhite);
        if (color == "secondary") styles.push(containedBlack , textWhite);
        if (color == "danger") styles.push(containedRed , textWhite);
    }

    if (variant == "text") {
        if (color == "primary") styles.push(textOrange);
        if (color == "secondary") styles.push(textBlue);
        if (color == "default") styles.push(textGray);
        if (color == "danger") styles.push(textRed);
    }

    if (variant == "outlined") {
        styles.push(outlined);
        if (color == "primary") styles.push(outlinedOrange);
        if (color == "secondary") styles.push(outlinedBlue);
        if (color == "default") styles.push(outlinedBlack);
        if (color == "danger") styles.push(outlinedRed);
      }


    return (
        <>
        <button 
            type={type} 
            onClick={onClick}
            >
            <div className={`${styles.join(" ")} text-sm rounded-3xl transition ease-in-out duration-300 ${className} `}>
              {children}
            </div>
          </button>
        </>
    )
}

export default Button