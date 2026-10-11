"use client";

import * as React from "react";
import { useState } from "react";
import { SubmissionCards } from "./submission-cards";
import { SubmissionTable } from "./submission-table";
import { SubmissionDialog } from "./submission-dialog";
import { INITIAL_SUBMISSIONS, FormSubmission } from "./types";

export function FormSubmissionsContent() {
  const [submissions] = useState<FormSubmission[]>(INITIAL_SUBMISSIONS);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSelect = (submission: FormSubmission) => {
    setSelectedSubmission(submission);
    setIsDialogOpen(true);
  };

  return (
    <div className="flex flex-col gap-6 py-4 md:py-6">
      <SubmissionCards submissions={submissions} />
      <SubmissionTable submissions={submissions} onSelect={handleSelect} />
      <SubmissionDialog
        submission={selectedSubmission}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
}
