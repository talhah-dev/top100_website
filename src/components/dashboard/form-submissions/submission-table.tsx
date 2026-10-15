"use client";

import * as React from "react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Eye } from "lucide-react";
import { FormSubmission } from "./types";

interface SubmissionTableProps {
  submissions: FormSubmission[];
  onSelect: (submission: FormSubmission) => void;
}

export function SubmissionTable({ submissions, onSelect }: SubmissionTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = submissions.filter((sub) => {
    const q = searchTerm.toLowerCase();
    return (
      sub.id.toLowerCase().includes(q) ||
      sub.form.toLowerCase().includes(q) ||
      sub.subject.toLowerCase().includes(q) ||
      sub.fromName.toLowerCase().includes(q) ||
      sub.fromEmail.toLowerCase().includes(q) ||
      sub.message.toLowerCase().includes(q) ||
      sub.dateCreated.toLowerCase().includes(q)
    );
  });

  return (
    <div className="px-4 lg:px-6">
      <Card className="relative overflow-hidden bg-[#101A30] border-[rgba(185,193,212,0.14)] shadow-xl rounded-2xl">
        <div className="rainbow-bar" />
        <CardHeader className="p-4 sm:p-6 pb-4 bg-[#0A1122]/50 border-b border-[rgba(185,193,212,0.08)]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="font-['Overlock'] text-xl font-black text-white">Form Submissions</CardTitle>
              <CardDescription className="text-xs text-[#B9C1D4] mt-0.5">
                Inquiries and messages submitted from the website
              </CardDescription>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="size-4 text-[#B9C1D4] absolute left-3 top-1/2 -translate-y-1/2" />
              <Input
                type="text"
                placeholder="Search submissions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 text-xs h-9 bg-[#0D1528] border-[rgba(185,193,212,0.18)] text-[#F6EFDF] placeholder:text-[#B9C1D4]/50 focus-visible:ring-[#FABF33]"
              />
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent bg-[#0D1528] border-b border-[rgba(185,193,212,0.12)]">
                  <TableHead className="w-[100px] text-xs font-semibold text-[#B9C1D4]">ID</TableHead>
                  <TableHead className="w-[180px] text-xs font-semibold text-[#B9C1D4]">Subject</TableHead>
                  <TableHead className="w-[150px] text-xs font-semibold text-[#B9C1D4]">From Name</TableHead>
                  <TableHead className="w-[220px] text-xs font-semibold text-[#B9C1D4]">From Email</TableHead>
                  <TableHead className="text-xs font-semibold text-[#B9C1D4]">Message</TableHead>
                  <TableHead className="w-[120px] text-xs font-semibold text-[#B9C1D4]">Date Created</TableHead>
                  <TableHead className="text-right text-xs font-semibold w-[90px] text-[#B9C1D4]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length > 0 ? (
                  filtered.map((item) => (
                    <TableRow
                      key={item.id}
                      onClick={() => onSelect(item)}
                      className="cursor-pointer transition-colors hover:bg-[rgba(250,191,51,0.05)] border-b border-[rgba(185,193,212,0.08)]"
                    >
                      <TableCell>
                        <span className="text-xs font-mono text-[#B9C1D4]">
                          {item.id}
                        </span>
                      </TableCell>
                      <TableCell className="text-xs text-white font-medium">
                        {item.subject}
                      </TableCell>
                      <TableCell className="text-xs text-[#F6EFDF]">
                        {item.fromName}
                      </TableCell>
                      <TableCell className="text-xs text-[#FABF33] font-mono">
                        {item.fromEmail}
                      </TableCell>
                      <TableCell className="max-w-[320px] truncate text-xs text-[#B9C1D4] italic">
                        {item.message}
                      </TableCell>
                      <TableCell className="text-xs text-[#B9C1D4] whitespace-nowrap">
                        {item.dateCreated}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelect(item);
                          }}
                          className="h-8 px-2 text-xs gap-1 text-[#FABF33] hover:text-[#FABF33] hover:bg-[rgba(250,191,51,0.1)]"
                        >
                          <Eye className="size-3.5" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="h-32 text-center text-[#B9C1D4] text-sm">
                      No form submissions found matching your search.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
