import MemberLayout from "@/components/layout/MemberLayout"
import PanelHeader from "@/shared-components/panelHeader/PanelHeader"

const OrdersMemberView = () => {
    return(
        <MemberLayout>
            <div className="w-full">
                <PanelHeader title="Product Page" icon="bxs-cart" />
            </div>
        </MemberLayout>
    )
}

export default OrdersMemberView