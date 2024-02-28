// ion/SideNavigation/default: Generated with Ion on 2/28/2024, 10:56:30 AM
// Figma Link: https://www.figma.com/file/Qohyu8a8oaVqtDvIRuY120?node-id=3038:19921
import {
   Graph,
   DeviceMobile,
   Files,
   Bell,
} from "@phosphor-icons/react/dist/ssr";
import {
   NavigationMenuLink,
   NavigationMenuItem,
   NavigationMenu,
   NavigationMenuList,
} from "@/components/ion/Navigation";
import Sidebar from "./Sidebar";

function SideNavigation() {
   return (
      <Sidebar filled>
         <NavigationMenu>
            <NavigationMenuList className="h-[500px] flex-col flex items-center gap-5 py-10">
               <div className="flex-col flex justify-center items-center py-5">
                  <img
                     src="/images/propvivo-ion/propvivo-logo.svg"
                     alt="propvivo-logo"
                     className="w-full h-full"
                  />
               </div>
               <NavigationMenuItem className={"px-3"}>
                  <NavigationMenuLink
                     iconLeading={<Graph size={16} weight={"fill"} />}
                     type={"filled"}
                     selected
                  />
               </NavigationMenuItem>
               <NavigationMenuItem className={"px-3"}>
                  <NavigationMenuLink
                     iconLeading={<DeviceMobile size={16} weight={"fill"} />}
                     type={"filled"}
                  />
               </NavigationMenuItem>
               <NavigationMenuItem className={"px-3"}>
                  <NavigationMenuLink
                     iconLeading={<Files size={16} weight={"fill"} />}
                     type={"filled"}
                  />
               </NavigationMenuItem>
               <NavigationMenuItem className={"px-3"}>
                  <NavigationMenuLink
                     iconLeading={<Bell size={16} weight={"fill"} />}
                     type={"filled"}
                  />
               </NavigationMenuItem>
            </NavigationMenuList>
         </NavigationMenu>
      </Sidebar>
   );
}
export default SideNavigation;
