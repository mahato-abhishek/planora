"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInDemo } from "@/lib/actions/auth-actions";
import dash from "@/public/dash-dark.png";
export const Hero = () => {
  const router = useRouter();
  const [isDemoLoading, setIsDemoLoading] = useState(false);
  const [demoError, setDemoError] = useState("");

  const handleDemoLogin = async () => {
    setIsDemoLoading(true);
    setDemoError("");

    try {
      const result = await signInDemo();
      if (!result.user) {
        throw new Error("The demo account is not available yet.");
      }
      router.push("/dashboard");
    } catch (error) {
      setDemoError(
        error instanceof Error
          ? error.message
          : "Unable to open the demo right now.",
      );
    } finally {
      setIsDemoLoading(false);
    }
  };

  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen w-[98%] max-w-6xl flex-col items-center px-2 pb-12 pt-24"
    >
      <p className="pt-10 text-center text-5xl sm:text-6xl lg:text-7xl">
        Work flows better
        <span className="block font-semibold">when everything clicks.</span>
      </p>
      <p className="max-w-xl p-5 text-center text-base text-mist-800 dark:text-mist-400 sm:text-lg">
        Planora keeps projects, tasks, priorities, and deadlines together so you
        can turn a clear plan into steady progress.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/auth"
          className="rounded-full bg-mist-950 px-5 py-2 text-white dark:bg-mist-50 dark:text-black"
        >
          Get Started
        </Link>
        <button
          type="button"
          onClick={handleDemoLogin}
          disabled={isDemoLoading}
          className="rounded-full border border-mist-400 px-5 py-2 disabled:cursor-wait disabled:opacity-60 dark:border-mist-600"
        >
          {isDemoLoading ? "Opening demo..." : "Try the live demo"}
        </button>
      </div>
      {demoError && (
        <p
          role="alert"
          className="mt-3 text-center text-sm text-red-600 dark:text-red-400"
        >
          {demoError}
        </p>
      )}

      <div className="mt-12 w-full overflow-hidden rounded-t-xl border border-b-0 border-mist-300 bg-mist-100 p-2 dark:border-mist-700 dark:bg-mist-900">
        <Image
          src={dash}
          alt="Planora dashboard showing projects and tasks"
          className="h-auto w-full rounded-lg"
          priority
        />
      </div>
    </section>
  );
};
