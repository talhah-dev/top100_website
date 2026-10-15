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
      <DialogContent className="sm:max-w-[620px] max-h-[90vh] overflow-y-auto p-0 gap-0 bg-[#101A30] border border-[rgba(185,193,212,0.18)] shadow-2xl rounded-2xl">
        <div className="rainbow-bar" />
        <DialogHeader className="gap-1 p-5 bg-[#0A1122]/90 border-b border-[rgba(185,193,212,0.12)]">
          <div className="flex items-center justify-between gap-3 pr-6">
            <span className="font-mono text-xs text-[#B9C1D4]">ID: {submission.id}</span>
          </div>
          <DialogTitle className="font-['Overlock'] text-xl font-bold text-white">
            {submission.subject || "Submission Details"}
          </DialogTitle>
          <DialogDescription className="text-xs text-[#B9C1D4] flex items-center gap-1.5 pt-0.5">
            <Calendar className="size-3.5 text-[#FABF33]" />
            Created on {submission.dateCreated}
          </DialogDescription>
        </DialogHeader>

        <div className="p-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0D1528] border border-[rgba(185,193,212,0.12)]">
              <User className="size-4 text-[#FABF33] shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="text-xs text-[#B9C1D4] block">From Name</span>
                <span className="text-sm font-semibold text-white truncate block">{submission.fromName}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0D1528] border border-[rgba(185,193,212,0.12)]">
              <Mail className="size-4 text-[#FABF33] shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="text-xs text-[#B9C1D4] block">From Email</span>
                <a
                  href={`mailto:${submission.fromEmail}?subject=RE: ${submission.subject || "Top 100 Guide"}`}
                  className="text-sm font-semibold text-[#FABF33] hover:underline truncate block"
                >
                  {submission.fromEmail}
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-[#0D1528] border border-[rgba(185,193,212,0.12)] text-xs">
            <Tag className="size-3.5 text-[#FABF33] shrink-0" />
            <span className="text-[#B9C1D4]">Subject:</span>
            <span className="font-medium text-[#F6EFDF] truncate">{submission.subject}</span>
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B9C1D4]">
              Message
            </span>
            <div className="p-4 rounded-xl bg-[#060B16] border border-[rgba(185,193,212,0.14)] shadow-xs text-sm leading-relaxed whitespace-pre-wrap font-sans text-[#F6EFDF]">
              {submission.message}
            </div>
          </div>
        </div>

        <DialogFooter className="p-4 bg-[#0A1122]/60 border-t border-[rgba(185,193,212,0.1)]">
          <Button
            size="sm"
            className="w-full sm:w-auto gap-1.5 bg-[#FABF33] text-[#0A1122] font-bold hover:bg-[#FABF33]/90 shadow-sm"
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
