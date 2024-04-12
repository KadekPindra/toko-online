import AdminLayout from "@/components/layout/AdminLayout"
import PanelHeader from "@/shared-components/panelHeader/PanelHeader"

const ProductAdminView = () => {
    return(
        <AdminLayout>
            <div className="w-full">
                <PanelHeader title="Product Page" icon="bxs-archive" />
            </div>
        </AdminLayout>
    )
}

export default ProductAdminView