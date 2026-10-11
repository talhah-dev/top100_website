"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Compass, Building2, TrendingUp, Inbox } from "lucide-react";
import { FormSubmission } from "./types";

interface SubmissionCardsProps {
  submissions: FormSubmission[];
}

export function SubmissionCards({ submissions }: SubmissionCardsProps) {
  const total = submissions.length;
  const guideCount = submissions.filter((s) => s.subject === "A place in the guide").length;
  const businessCount = submissions.filter((s) => s.subject === "Feature my business").length;
  const contactFormCount = submissions.filter((s) => s.form === "contact").length;

  return (
    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
      <Card className="bg-linear-to-t from-primary/5 to-card shadow-xs">
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

      <Card className="bg-linear-to-t from-primary/5 to-card shadow-xs">
        <CardHeader>
          <CardDescription>General Inquiries</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums sm:text-3xl">
            {contactFormCount}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">General</Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <Mail className="size-3.5 text-primary" />
            Standard inquiries
          </div>
          <span>Via website inquiries</span>
        </CardFooter>
      </Card>

      <Card className="bg-linear-to-t from-primary/5 to-card shadow-xs">
        <CardHeader>
          <CardDescription>Guide Updates</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums sm:text-3xl">
            {guideCount}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">Attractions</Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <Compass className="size-3.5 text-primary" />
            Place & hour revisions
          </div>
          <span>Directory entries</span>
        </CardFooter>
      </Card>

      <Card className="bg-linear-to-t from-primary/5 to-card shadow-xs">
        <CardHeader>
          <CardDescription>Business Features</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums sm:text-3xl">
            {businessCount}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">Commercial</Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <Building2 className="size-3.5 text-primary" />
            Feature requests
          </div>
          <span>Hotels & tours</span>
        </CardFooter>
      </Card>
    </div>
  );
}
