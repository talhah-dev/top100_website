"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Inbox } from "lucide-react";
import { FormSubmission } from "./types";

interface SubmissionCardsProps {
  submissions: FormSubmission[];
}

export function SubmissionCards({ submissions }: SubmissionCardsProps) {
  const total = submissions.length;

  return (
    <div className="px-4 lg:px-6">
      <Card className="relative overflow-hidden max-w-sm bg-[#101A30] border-[rgba(185,193,212,0.14)] shadow-md">
        <div className="rainbow-bar" />
        <CardHeader className="pt-5">
          <CardDescription className="text-[#B9C1D4] font-medium">Total Submissions</CardDescription>
          <CardTitle className="font-['Overlock'] text-3xl font-black tabular-nums text-white mt-1">
            {total}
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="gap-1 text-[#FABF33] border-[rgba(250,191,51,0.3)] bg-[rgba(250,191,51,0.1)]">
              <Inbox className="size-3" />
              Active
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-xs text-[#B9C1D4] border-t border-[rgba(185,193,212,0.08)] pt-3 pb-3">
          <div className="flex items-center gap-1.5 font-medium text-[#F6EFDF]">
            <Inbox className="size-3.5 text-[#FABF33]" />
            All recorded inquiries
          </div>
          <span>Total received recommendation & contact forms</span>
        </CardFooter>
      </Card>
    </div>
  );
}
