import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { SectionCards } from "@/components/dashboard/section-cards"
import { AnalyticsSection } from "@/components/dashboard/analytics-section"
import { SiteHeader } from "@/components/dashboard/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Page() {
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
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-6 py-4 md:py-6">
              <SectionCards />
              <AnalyticsSection />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
