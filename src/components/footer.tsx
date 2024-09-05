import { GITHUB_URL, SITE } from "@/lib/constants";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

interface Props {}

const Footer = async ({}: Props) => {
  return (
    <footer className="py-6 container">
      <Separator className="my-14" />

      <div className="flex items-center justify-between flex-col md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>

        <Link href={GITHUB_URL} target="_blank">
          <Button variant={"outline"}>
            Get Started
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
