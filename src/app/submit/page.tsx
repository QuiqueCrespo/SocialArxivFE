"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Upload, FileText, FilePlus2, Users, File } from "lucide-react";

const postTypes = [
  { key: "paper", label: "Paper", icon: <FileText className="w-4 h-4 mr-1" /> },
  { key: "preprint", label: "Preprint", icon: <FilePlus2 className="w-4 h-4 mr-1" /> },
  { key: "proposal", label: "Proposal", icon: <File className="w-4 h-4 mr-1" /> },
  { key: "collab", label: "Collaboration Call", icon: <Users className="w-4 h-4 mr-1" /> },
];

export default function SubmitPage() {
  const [type, setType] = useState("paper");
  const [form, setForm] = useState({
    title: "",
    abstract: "",
    tags: "",
    channel: "",
    authors: "",
    pdf: null as File | null,
    draft: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type: inputType, checked, files } = e.target as any;
    if (inputType === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (inputType === "file") {
      setForm({ ...form, pdf: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleTypeChange = (val: string) => setType(val);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to backend
    alert("Submitted! (not yet implemented)");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6 mt-4">
      <h1 className="text-2xl font-bold mb-6">Submit a {postTypes.find(pt => pt.key === type)?.label}</h1>
      <Tabs defaultValue="paper" value={type} onValueChange={handleTypeChange} className="mb-6">
        <TabsList>
          {postTypes.map((pt) => (
            <TabsTrigger key={pt.key} value={pt.key}>
              {pt.icon}{pt.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 font-medium">Title *</label>
          <input type="text" name="title" value={form.title} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Abstract</label>
          <textarea name="abstract" value={form.abstract} onChange={handleChange} rows={4} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Tags</label>
          <input type="text" name="tags" value={form.tags} onChange={handleChange} placeholder="e.g. quantum, biology" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Channel</label>
          <input type="text" name="channel" value={form.channel} onChange={handleChange} placeholder="e.g. machine-learning" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Authors</label>
          <input type="text" name="authors" value={form.authors} onChange={handleChange} placeholder="e.g. Jane Doe, John Smith" className="w-full border rounded px-3 py-2" />
        </div>
        {(type === "paper" || type === "preprint" || type === "proposal") && (
          <div>
            <label className="block mb-1 font-medium">PDF Upload</label>
            <input type="file" name="pdf" accept="application/pdf" onChange={handleChange} className="w-full" />
            {form.pdf && <div className="text-xs text-gray-500 mt-1">Selected: {form.pdf.name}</div>}
          </div>
        )}
        {(type === "preprint" || type === "proposal") && (
          <div className="flex items-center gap-2">
            <input type="checkbox" name="draft" checked={form.draft} onChange={handleChange} id="draft-toggle" />
            <label htmlFor="draft-toggle" className="font-medium">Mark as Draft</label>
          </div>
        )}
        <Button type="submit" className="w-full mt-4"><Upload className="w-4 h-4 mr-2" />Submit</Button>
      </form>
    </div>
  );
} 