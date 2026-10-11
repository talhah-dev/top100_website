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
      <Card className="max-w-sm bg-linear-to-t from-primary/5 to-card shadow-xs">
        <CardHeader>
          <CardDescription>Total Submissions</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums sm:text-3xl">
            {total}
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="gap-1 text-emerald-600 border-emerald-500/20 bg-emerald-500/10">
              <TrendingUp className="size-3" />
              +12%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <Inbox className="size-3.5 text-primary" />
            All recorded inquiries
          </div>
          <span>Total received forms</span>
        </CardFooter>
      </Card>
    </div>
  );
}
