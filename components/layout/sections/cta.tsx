import DiscordIcon from "@/components/icons/discord-icon";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
export const CallToAction = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <DiscordIcon />
                <div>
                  Ready to join this
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    Community?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Join our vibrant Discord community! Connect, share, and grow with
              like-minded enthusiasts. Click to dive in! 🚀
            </CardContent>

            <CardFooter>
              <Button asChild>
                <a href="https://discord.com/" target="_blank">
                  Join Discord
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};

export const CallToActionTwo = () => {
  return (
    <div className="container-fluid bg-white flex items-center justify-center">
      <div className="container mx-auto text-center my-10">
        <h1 className="font-extrabold lg:text-[32px] max-w-[450px] mx-auto text-xl leading-none lg:leading-[2.4rem]">
          Ready to Ride the Waves?
          {/* Do You want to{" "}
          <span className="font-extrabold lg:text-[32px] text-xl text-[#EBBC6C]">
            start{" "}
          </span>
          <span className="font-extrabold lg:text-[32px] text-xl text-[#50CEDF]">
            surfing{" "}
          </span>
          now? */}
        </h1>
        <p className="text-[#222222] max-w-[500px] my-5 text-center mx-auto">
          Join the King Surf family today! Whether you&apos;re here for lessons
          or rentals, we promise you&apos;ll leave with memories of Bali&apos;s
          epic surf and a smile on your face.
        </p>

        <Link
          href="https://wa.me/6282292947707"
          className={cn(
            buttonVariants({ size: "lg", variant: "default" }),
            "text-black"
          )}
        >
          <p>Contact Us</p>
        </Link>
      </div>
    </div>
  );
};
