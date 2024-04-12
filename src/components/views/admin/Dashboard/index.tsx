import AdminLayout from "@/components/layout/AdminLayout"
import PanelHeader from "@/shared-components/panelHeader/PanelHeader"

const DashboardAdminView = () => {
    return(
        <AdminLayout>
            <div className="w-full">
                <PanelHeader title="Dashboard Page" icon="bxs-dashboard" />
            </div>
        </AdminLayout>
    )
}

export default DashboardAdminView