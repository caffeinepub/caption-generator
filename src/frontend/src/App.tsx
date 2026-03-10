import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  type GeneratedCaption,
  LANGUAGES,
  TEMPLATES,
  generateCaptions,
} from "@/lib/captionGenerator";
import {
  Check,
  ChevronRight,
  Copy,
  Globe,
  Hash,
  Layers,
  RefreshCw,
  Sparkles,
  Trash2,
  UploadCloud,
  Video,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const VARIATION_COLORS: Record<string, string> = {
  Enthusiastic: "bg-primary/10 text-primary border-primary/30",
  Descriptive: "bg-accent/10 text-accent border-accent/30",
  "Call-to-Action": "bg-chart-3/10 text-chart-3 border-chart-3/30",
};

const VARIATION_ICONS: Record<string, string> = {
  Enthusiastic: "\u26a1",
  Descriptive: "\ud83d\udcd6",
  "Call-to-Action": "\ud83c\udfaf",
};

function CaptionCard({
  caption,
  index,
  onCopy,
  copied,
}: {
  caption: GeneratedCaption;
  index: number;
  onCopy: (text: string, idx: number) => void;
  copied: boolean;
}) {
  const hashtagStr = caption.hashtags.map((h) => `#${h}`).join(" ");
  const fullText = `${caption.text} ${hashtagStr}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      className="card-glow group relative rounded-xl border border-border bg-card p-6 transition-all duration-300"
      data-ocid={`caption.result.card.${index + 1}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${VARIATION_COLORS[caption.variation]}`}
        >
          <span>{VARIATION_ICONS[caption.variation]}</span>
          {caption.variation}
        </span>
        <span className="text-xs text-muted-foreground">
          {caption.charCount} chars
        </span>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-foreground">
        {caption.text}
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {caption.hashtags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
          >
            #{tag}
          </span>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onCopy(fullText, index)}
        className={`w-full gap-2 border transition-all duration-200 ${
          copied
            ? "border-primary/50 bg-primary/10 text-primary"
            : "border-border hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
        }`}
        data-ocid={`caption.copy_button.${index + 1}`}
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5" />
            <span data-ocid="caption.success_state">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" />
            Copy Caption
          </>
        )}
      </Button>
    </motion.div>
  );
}

// ── Video Upload Section ──────────────────────────────────────────────────────
function VideoUploadSection({
  videoUrl,
  videoName,
  onFile,
  onRemove,
}: {
  videoUrl: string | null;
  videoName: string;
  onFile: (file: File) => void;
  onRemove: () => void;
}) {
  const inputId = "video-file-input";
  const [dragging, setDragging] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLLabelElement>) => {
      e.preventDefault();
      setDragging(false);
      const file = e.dataTransfer.files[0];
      if (!file || !file.type.startsWith("video/")) {
        toast.error("Please drop a valid video file.");
        return;
      }
      onFile(file);
    },
    [onFile],
  );

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFile(file);
    e.target.value = "";
  };

  return (
    <div className="space-y-3">
      <span className="text-sm font-medium text-foreground">
        <Video className="mr-1.5 inline h-3.5 w-3.5" />
        Upload Your Video{" "}
        <span className="font-normal text-muted-foreground">(optional)</span>
      </span>

      {videoUrl ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-xl border border-border bg-card"
        >
          {/* Video player */}
          <div className="relative bg-black">
            {/* biome-ignore lint/a11y/useMediaCaption: user-uploaded local video; captions are user-provided */}
            <video
              src={videoUrl}
              controls
              className="max-h-64 w-full object-contain"
            />
          </div>

          {/* File info + remove */}
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="flex min-w-0 items-center gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/15">
                <Video className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="truncate text-xs font-medium text-foreground">
                {videoName}
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onRemove}
              className="shrink-0 gap-1.5 text-xs text-muted-foreground hover:text-destructive"
              data-ocid="video.delete_button"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Remove
            </Button>
          </div>
        </motion.div>
      ) : (
        <label
          htmlFor={inputId}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          data-ocid="video.dropzone"
          className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-8 text-center transition-all duration-200 ${
            dragging
              ? "scale-[1.01] border-primary bg-primary/8"
              : "border-border bg-background/30 hover:border-primary/60 hover:bg-primary/5"
          }`}
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-200 ${
              dragging ? "bg-primary/20" : "bg-muted"
            }`}
          >
            <UploadCloud
              className={`h-6 w-6 transition-colors duration-200 ${
                dragging ? "text-primary" : "text-muted-foreground"
              }`}
            />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              Drop your video here
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              or{" "}
              <span className="font-semibold text-primary underline-offset-2 hover:underline">
                browse to upload
              </span>{" "}
              — MP4, WebM, MOV, AVI supported
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="pointer-events-none mt-1 gap-2 border-border"
            data-ocid="video.upload_button"
            tabIndex={-1}
            aria-hidden
          >
            <UploadCloud className="h-3.5 w-3.5" />
            Choose Video
          </Button>
        </label>
      )}

      <input
        id={inputId}
        type="file"
        accept="video/mp4,video/webm,video/quicktime,video/x-msvideo,video/*"
        className="hidden"
        onChange={handleInputChange}
        aria-label="Upload video file"
      />
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [topic, setTopic] = useState("");
  const [template, setTemplate] = useState(TEMPLATES[0]);
  const [language, setLanguage] = useState("English");
  const [captions, setCaptions] = useState<GeneratedCaption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [seed, setSeed] = useState(0);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [hasGenerated, setHasGenerated] = useState(false);

  // Video state
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoName, setVideoName] = useState("");
  // Keep a ref to the latest URL for unmount cleanup
  const videoUrlRef = useRef<string | null>(null);
  videoUrlRef.current = videoUrl;

  const handleVideoFile = useCallback((file: File) => {
    setVideoUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(file);
    });
    setVideoName(file.name);
    toast.success("Video loaded! Watch it while you generate captions.");
  }, []);

  const handleVideoRemove = useCallback(() => {
    setVideoUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    setVideoName("");
  }, []);

  // Revoke object URL on unmount to free memory
  useEffect(() => {
    return () => {
      if (videoUrlRef.current) URL.revokeObjectURL(videoUrlRef.current);
    };
  }, []);

  const handleGenerate = useCallback(async () => {
    if (!topic.trim()) {
      toast.error("Please enter a video topic first!");
      return;
    }
    setIsLoading(true);
    setCaptions([]);
    await new Promise((r) => setTimeout(r, 800));
    const results = generateCaptions(topic, template, language, seed);
    setCaptions(results);
    setHasGenerated(true);
    setIsLoading(false);
    setSeed((s) => s + 7);
  }, [topic, template, language, seed]);

  const handleRegenerate = useCallback(async () => {
    if (!topic.trim()) return;
    setIsLoading(true);
    setCaptions([]);
    await new Promise((r) => setTimeout(r, 600));
    const results = generateCaptions(topic, template, language, seed);
    setCaptions(results);
    setIsLoading(false);
    setSeed((s) => s + 13);
  }, [topic, template, language, seed]);

  const handleCopy = useCallback((text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    toast.success("Caption copied to clipboard!");
    setTimeout(() => setCopiedIdx(null), 2000);
  }, []);

  const currentYear = new Date().getFullYear();
  const topicPreview = topic.length > 40 ? `${topic.slice(0, 40)}...` : topic;

  return (
    <div className="noise-bg min-h-screen bg-background">
      <Toaster position="top-right" richColors />

      {/* Background decorative orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.76 0.14 192), transparent 70%)",
          }}
        />
        <div
          className="absolute -right-32 top-1/3 h-80 w-80 rounded-full opacity-8"
          style={{
            background:
              "radial-gradient(circle, oklch(0.80 0.16 72), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, oklch(0.68 0.18 320), transparent 70%)",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 glow-primary">
              <Video className="h-5 w-5 text-primary" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              Caption<span className="gradient-text">AI</span>
            </span>
          </div>
          <div className="hidden items-center gap-6 sm:flex">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Globe className="h-3.5 w-3.5" />
              <span>27 Languages</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Layers className="h-3.5 w-3.5" />
              <span>20 Templates</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Zap className="h-3.5 w-3.5" />
              <span>100% Free</span>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3 w-3" />
            AI-Powered Caption Generator
          </div>
          <h1 className="font-display mb-4 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Generate <span className="gradient-text">Perfect Captions</span>
            <br />
            for Every Video
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Create scroll-stopping captions in 27 languages across 20+ creative
            templates. Paste your topic, pick your style, and get 3 unique
            variations instantly &mdash; free forever.
          </p>
        </motion.div>

        {/* Generator Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground">
                Caption Generator
              </h2>
            </div>

            <div className="space-y-5">
              {/* ── Video Upload ── */}
              <VideoUploadSection
                videoUrl={videoUrl}
                videoName={videoName}
                onFile={handleVideoFile}
                onRemove={handleVideoRemove}
              />

              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-border/60" />
                <span className="text-xs text-muted-foreground">
                  then describe your video
                </span>
                <div className="h-px flex-1 bg-border/60" />
              </div>

              {/* ── Topic ── */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">
                  Video Topic or Description
                </Label>
                <Textarea
                  placeholder="e.g. Morning workout routine, Street food in Tokyo, Wedding highlights..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="min-h-[100px] resize-none border-border bg-background/50 text-sm placeholder:text-muted-foreground focus-visible:ring-primary/50"
                  data-ocid="caption.topic_input"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.metaKey) handleGenerate();
                  }}
                />
                <p className="text-right text-xs text-muted-foreground">
                  {topic.length} characters
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-foreground">
                    <Layers className="mr-1.5 inline h-3.5 w-3.5" />
                    Template Style
                  </Label>
                  <Select value={template} onValueChange={setTemplate}>
                    <SelectTrigger
                      className="border-border bg-background/50 text-sm"
                      data-ocid="caption.template_select"
                    >
                      <SelectValue placeholder="Choose template" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[280px]">
                      {TEMPLATES.map((t) => (
                        <SelectItem key={t} value={t} className="text-sm">
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-foreground">
                    <Globe className="mr-1.5 inline h-3.5 w-3.5" />
                    Language
                  </Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger
                      className="border-border bg-background/50 text-sm"
                      data-ocid="caption.language_select"
                    >
                      <SelectValue placeholder="Choose language" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[280px]">
                      {LANGUAGES.map((l) => (
                        <SelectItem key={l} value={l} className="text-sm">
                          {l}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                size="lg"
                onClick={handleGenerate}
                disabled={isLoading || !topic.trim()}
                className="w-full gap-2 bg-primary font-semibold text-primary-foreground shadow-glow transition-all hover:bg-primary/90 hover:shadow-glow disabled:opacity-50"
                data-ocid="caption.submit_button"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span data-ocid="caption.loading_state">
                      Generating captions...
                    </span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Generate Captions
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Tip: Press{" "}
                <kbd className="rounded border border-border bg-muted px-1 py-0.5 text-xs">
                  Cmd+Enter
                </kbd>{" "}
                to generate
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feature Pills */}
        {!hasGenerated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: "\ud83c\udfac", text: "YouTube Descriptions" },
              { icon: "\ud83d\udcf1", text: "Instagram Reels" },
              { icon: "\ud83c\udfb5", text: "TikTok Captions" },
              { icon: "\ud83d\udc26", text: "Twitter/X Posts" },
              { icon: "\ud83d\udcbc", text: "LinkedIn Videos" },
              { icon: "\ud83d\udce3", text: "Facebook Reels" },
            ].map(({ icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm text-muted-foreground"
              >
                <span>{icon}</span>
                {text}
              </div>
            ))}
          </motion.div>
        )}

        {/* Results */}
        <AnimatePresence mode="wait">
          {captions.length > 0 && (
            <motion.div
              key={seed}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-12"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Your Captions
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-primary/15 text-primary"
                  >
                    {captions.length} variations
                  </Badge>
                  {language !== "English" && (
                    <Badge
                      variant="outline"
                      className="border-accent/40 text-accent"
                    >
                      <Globe className="mr-1 h-3 w-3" />
                      {language}
                    </Badge>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRegenerate}
                  disabled={isLoading}
                  className="gap-2 border-border hover:border-primary/50 hover:text-primary"
                  data-ocid="caption.regenerate_button"
                >
                  <RefreshCw
                    className={`h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`}
                  />
                  Regenerate
                </Button>
              </div>

              <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <Hash className="h-4 w-4" />
                <span>Template:</span>
                <span className="font-medium text-foreground">{template}</span>
                <span className="mx-1 opacity-30">&bull;</span>
                <Globe className="h-4 w-4" />
                <span>Language:</span>
                <span className="font-medium text-foreground">{language}</span>
                <span className="mx-1 opacity-30">&bull;</span>
                <span>Topic:</span>
                <span className="font-medium text-foreground">
                  {topicPreview}
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {captions.map((caption, i) => (
                  <CaptionCard
                    key={`${i}-${seed}`}
                    caption={caption}
                    index={i}
                    onCopy={handleCopy}
                    copied={copiedIdx === i}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-center"
              >
                <Button
                  variant="ghost"
                  onClick={() => {
                    const allText = captions
                      .map(
                        (c) =>
                          `--- ${c.variation} ---\n${c.text}\n${c.hashtags.map((h) => `#${h}`).join(" ")}`,
                      )
                      .join("\n\n");
                    navigator.clipboard.writeText(allText);
                    toast.success("All 3 captions copied!");
                  }}
                  className="gap-2 text-muted-foreground hover:text-primary"
                >
                  <Copy className="h-4 w-4" />
                  Copy All 3 Captions
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid gap-4 sm:grid-cols-3"
        >
          {[
            {
              number: "20+",
              label: "Caption Templates",
              desc: "From funny to formal",
              icon: "\ud83c\udfa8",
            },
            {
              number: "27",
              label: "Languages Supported",
              desc: "Reach a global audience",
              icon: "\ud83c\udf0d",
            },
            {
              number: "\u221e",
              label: "Free Generations",
              desc: "No limits, no signups",
              icon: "\u26a1",
            },
          ].map(({ number, label, desc, icon }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="mb-2 text-3xl">{icon}</div>
              <div className="font-display mb-1 text-3xl font-extrabold text-primary">
                {number}
              </div>
              <div className="mb-1 font-semibold text-foreground">{label}</div>
              <div className="text-sm text-muted-foreground">{desc}</div>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-24 border-t border-border/50 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
