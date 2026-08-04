'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Network animation
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }

    const nodes: Node[] = [];
    const nodeCount = 15;
    const connectionDistance = 150;

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 2.5 + 1.5,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(18, 20, 28, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x - node.radius < 0 || node.x + node.radius > canvas.width) {
          node.vx *= -1;
          node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x));
        }
        if (node.y - node.radius < 0 || node.y + node.radius > canvas.height) {
          node.vy *= -1;
          node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y));
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - node.x;
          const dy = nodes[j].y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(242, 199, 102, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }

        // Draw node
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius);
        gradient.addColorStop(0, 'rgba(242, 199, 102, 0.8)');
        gradient.addColorStop(1, 'rgba(200, 144, 30, 0.4)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <Image
            src="/logos/logo-mark.svg"
            alt="Asante Trade"
            width={120}
            height={120}
            priority
            className="animate-pulse-glow"
          />
        </div>

        {/* Main heading with stagger animation */}
        <div className="text-center mb-6 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold animate-slide-up">
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Asante Trade
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 animate-slide-up-delayed-1">
            Financial Inclusion, Powered by Stellar
          </p>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto mb-12 text-center animate-slide-up-delayed-2">
          <p className="text-lg text-slate-300 leading-relaxed">
            Empowering field agents to bring mobile wallets, remittances, savings, and bill payments to underbanked communities across Africa.
          </p>
        </div>



        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl animate-fade-in-delayed-4">
          {[
            {
              title: 'Fast & Secure',
              description: 'Built on Stellar\'s low-cost, lightning-fast blockchain rails',
              icon: '⚡',
            },
            {
              title: 'Agent Network',
              description: 'Manage field agents, compliance, and territory performance',
              icon: '🌐',
            },
            {
              title: 'Open Source',
              description: 'Community-driven development with transparent roadmap',
              icon: '🔓',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10 group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-amber-300">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Status section */}
        <div className="mt-20 text-center text-slate-500 text-sm animate-fade-in-delayed-5">
          <p>Currently in active development • Contributions welcome</p>
        </div>
      </div>

      {/* Floating orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-float-1" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-float-2" />
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(242, 199, 102, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(242, 199, 102, 0.8));
          }
        }

        @keyframes float-1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(30px, -30px);
          }
          66% {
            transform: translate(-30px, 30px);
          }
        }

        @keyframes float-2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(-30px, 30px);
          }
          66% {
            transform: translate(30px, -30px);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-slide-up-delayed-1 {
          animation: slide-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-slide-up-delayed-2 {
          animation: slide-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-slide-up-delayed-3 {
          animation: slide-up 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-delayed-4 {
          animation: fade-in 1s ease-out 0.8s forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed-5 {
          animation: fade-in 1s ease-out 1s forwards;
          opacity: 0;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
