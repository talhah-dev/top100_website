"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Calendar, User, FileText, Send, Tag } from "lucide-react";
import { FormSubmission } from "./types";

interface SubmissionDialogProps {
  submission: FormSubmission | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SubmissionDialog({
  submission,
  open,
  onOpenChange,
}: SubmissionDialogProps) {
  if (!submission) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[620px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="gap-1">
          <div className="flex items-center justify-between gap-3 pr-6">
            <span className="font-mono text-xs text-muted-foreground">ID: {submission.id}</span>
          </div>
          <DialogTitle className="text-xl font-semibold">
            {submission.subject || "Submission Details"}
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground flex items-center gap-1.5 pt-0.5">
            <Calendar className="size-3.5" />
            Created on {submission.dateCreated}
          </DialogDescription>
        </DialogHeader>

        <Separator />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border">
            <User className="size-4 text-primary shrink-0 mt-0.5" />
            <div className="min-w-0">
              <span className="text-xs text-muted-foreground block">From Name</span>
              <span className="text-sm font-medium truncate block">{submission.fromName}</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border">
            <Mail className="size-4 text-primary shrink-0 mt-0.5" />
            <div className="min-w-0">
              <span className="text-xs text-muted-foreground block">From Email</span>
              <a
                href={`mailto:${submission.fromEmail}?subject=RE: ${submission.subject || "Top 100 Guide"}`}
                className="text-sm font-medium text-primary hover:underline truncate block"
              >
                {submission.fromEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/30 border text-xs">
          <Tag className="size-3.5 text-primary shrink-0" />
          <span className="text-muted-foreground">Subject:</span>
          <span className="font-medium text-foreground truncate">{submission.subject}</span>
        </div>

        <div className="flex flex-col gap-2 pt-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Message
          </span>
          <div className="p-4 rounded-xl bg-card border shadow-xs text-sm leading-relaxed whitespace-pre-wrap font-sans text-foreground">
            {submission.message}
          </div>
        </div>

        <DialogFooter className="pt-2 border-t">
          <Button
            size="sm"
            className="w-full sm:w-auto gap-1.5"
            onClick={() => {
              window.location.href = `mailto:${submission.fromEmail}?subject=RE: ${encodeURIComponent(submission.subject || "Top 100 Inquiry")}`;
            }}
          >
            <Send className="size-3.5" />
            Reply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
