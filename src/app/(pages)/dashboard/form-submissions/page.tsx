import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { SiteHeader } from "@/components/dashboard/site-header"
import { FormSubmissionsContent } from "@/components/dashboard/form-submissions"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function FormSubmissionsPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader title="Form Submissions" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <FormSubmissionsContent />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
