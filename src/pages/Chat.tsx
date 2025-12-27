import { Header } from '@/components/layout/Header';
import { ChatInterface } from '@/components/chat/ChatInterface';

export default function Chat() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-8 px-4">
        <ChatInterface />
      </main>
    </div>
  );
}
