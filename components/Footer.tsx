"use client";

import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background-300 py-6 mt-10">
      <div className="container mx-auto px-4">
        <Card className="bg-background-300 border-none shadow-none">
          <CardBody className="flex flex-col items-center space-y-3 text-center">
            <h3 className="text-xl font-semibold">
              S&A Lawncare and Services LLC
            </h3>

            <p>
              Phone: <Link href="tel:8144413179">814-441-3179</Link>
            </p>

            <p>
              Email:{" "}
              <Link href="mailto:salawncare31@gmail.com">
                salawncare31@gmail.com
              </Link>
            </p>

            <span className="text-sm text-foreground font-thin">
              &copy; {new Date().getFullYear()} Auman's Landscaping and Services
              LLC. All rights reserved.
            </span>
          </CardBody>
        </Card>
      </div>
    </footer>
  );
}
