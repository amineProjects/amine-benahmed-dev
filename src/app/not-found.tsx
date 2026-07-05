import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-pretty text-base leading-7 text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary">
          Back home
          <ArrowRightIcon width={18} height={18} />
        </Button>
      </div>
    </Container>
  );
}
