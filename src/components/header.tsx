import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { SITE } from "@/lib/constants";

interface Props {}

const Header = async ({}: Props) => {
  return (
    <div className="">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img
                src="https://www.shadcnblocks.com/images/block/block-1.svg"
                className="w-8"
                alt="logo"
              />
              <span className="text-xl font-bold">Shadcn Blocks</span>
            </div>
            <div className="flex items-center">
              <a
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="#"
              >
                Home
              </a>

              <a
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="#"
              >
                Pricing
              </a>

              <a
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="#"
              >
                Blog
              </a>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant={"outline"}>Log in</Button>
            <Button>Sign up</Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={SITE.logo} className="w-8" alt={SITE.name} />
              <span className="text-xl font-bold">{SITE.name}</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <img src={SITE.logo} className="w-8" alt={SITE.name} />
                      <span className="text-xl font-bold">{SITE.name}</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-8 flex flex-col gap-4">
                  <a href="#" className="font-semibold">
                    Home
                  </a>

                  <a href="#" className="font-semibold">
                    Pricing
                  </a>
                  <a href="#" className="font-semibold">
                    Blog
                  </a>
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 justify-start">
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "text-muted-foreground justify-start",
                      )}
                      href="#"
                    >
                      Press
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "text-muted-foreground justify-start",
                      )}
                      href="#"
                    >
                      Contact
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "text-muted-foreground justify-start",
                      )}
                      href="#"
                    >
                      Imprint
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "text-muted-foreground justify-start",
                      )}
                      href="#"
                    >
                      Sitemap
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "text-muted-foreground justify-start",
                      )}
                      href="#"
                    >
                      Legal
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "text-muted-foreground justify-start",
                      )}
                      href="#"
                    >
                      Cookie Settings
                    </a>
                  </div>
                  <div className="mt-2 flex flex-col gap-3">
                    <Button variant={"outline"}>Log in</Button>
                    <Button>Sign up</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
