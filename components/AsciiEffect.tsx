"use client";

import React, { useState, useEffect, useCallback, useRef, ReactNode, useMemo } from 'react';
import { useThrottle } from '@uidotdev/usehooks';

const ASCII_CHARS = '░▒▓█▄▀ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+AÀÁÃBCÇDEÈÉẼFGHIÍÌĨJKLMNOÓÒÕPQRSTUÚÙŨVWXYZ';

interface AsciiEffectProps {
  effect: 'matrix' | 'wave' | 'typing' | 'glitch' | 'rain' | 'pulse' | 'fire' | 'spiral' | string;
  color?: string;
  width?: number;
  height?: number;
  speed?: number;
  children: ReactNode;
}

const AsciiEffect: React.FC<AsciiEffectProps> = ({
  effect,
  color = 'text-green-500',
  width = 10,
  height = 5,
  speed = 200,
  children
}) => {
  const [asciiText, setAsciiText] = useState('');
  const childrenText = useMemo(() => React.Children.toArray(children).join(''), [children]);
  const [frame, setFrame] = useState(0);
  const animationRef = useRef<NodeJS.Timeout>();

  const generateMatrix = useCallback(() => {
    const chars = ASCII_CHARS.split('');
    return Array(height).fill(0).map(() =>
      Array(width).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('')
    ).join('\n');
  }, [height, width]);

  const generateWave = useCallback((frame: number) => {
    const chars = ASCII_CHARS.split('');
    return Array(height).fill(0).map((_, i) =>
      Array(width).fill(0).map((_, j) => {
        const index = Math.floor((Math.sin(frame / 10 + i / 2 + j / 3) + 1) / 2 * chars.length);
        return chars[index];
      }).join('')
    ).join('\n');
  }, [height, width]);

  const generateTyping = useCallback((frame: number) => {
    const cursor = frame % 2 === 0 ? '▏' : ' ';
    return childrenText.slice(0, frame % (childrenText.length + 1)) + cursor;
  }, [childrenText]);

  const generateGlitch = useCallback(() => {
    return childrenText.split('').map(c =>
      Math.random() < 0.05 ? ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)] : c
    ).join('');
  }, [childrenText]);

  const generateRain = useCallback((frame: number) => {
    return Array(height).fill(0).map((_, i) =>
      Array(width).fill(0).map((_, j) => {
        const rainDrop = (j + frame) % height === i ? '|' : ' ';
        return Math.random() < 0.01 ? '*' : rainDrop;
      }).join('')
    ).join('\n');
  }, [height, width]);

  const generatePulse = useCallback((frame: number) => {
    const pulseChar = ASCII_CHARS[Math.floor((Math.sin(frame / 5) + 1) / 2 * ASCII_CHARS.length)];
    return Array(height).fill(Array(width).fill(pulseChar).join('')).join('\n');
  }, [height, width]);

  const generateFire = useCallback((frame: number) => {
    const fireChars = ' .:`*░▒▓█';
    return Array(height).fill(0).map((_, i) =>
      Array(width).fill(0).map((_, j) => {
        const intensity = Math.sin((i + j + frame) / 5) * Math.cos((i - j + frame) / 7);
        return fireChars[Math.floor(intensity * fireChars.length)];
      }).join('')
    ).join('\n');
  }, [height, width]);

  const generateSpiral = useCallback((frame: number) => {
    const spiralChars = ' .:`*░▒▓█';
    return Array(height).fill(0).map((_, i) =>
      Array(width).fill(0).map((_, j) => {
        const distance = Math.sqrt((i - height / 2) ** 2 + (j - width / 2) ** 2);
        const angle = Math.atan2(j - width / 2, i - height / 2);
        const intensity = Math.sin((distance + frame) / 10 + angle) * Math.cos((distance + frame) / 15 - angle);
        return spiralChars[Math.floor(intensity * spiralChars.length)];
      }).join('')
    ).join('\n');
  }, [height, width]);

  const updateAscii = useCallback((currentFrame: number) => {
    let newText = '';
    switch (effect) {
      case 'matrix':
        newText = generateMatrix();
        break;
      case 'wave':
        newText = generateWave(currentFrame);
        break;
      case 'typing':
        newText = generateTyping(currentFrame);
        break;
      case 'glitch':
        newText = generateGlitch();
        break;
      case 'rain':
        newText = generateRain(currentFrame);
        break;
      case 'pulse':
        newText = generatePulse(currentFrame);
        break;
      case 'fire':
        newText = generateFire(currentFrame);
        break;
      case 'spiral':
        newText = generateSpiral(currentFrame);
        break;
      default:
        newText = effect;
    }
    setAsciiText(newText);
  }, [effect, generateMatrix, generateWave, generateTyping, generateGlitch, generateRain, generatePulse, generateFire, generateSpiral]);

  const throttledFrame = useThrottle(frame, 250);

  useEffect(() => {
    updateAscii(throttledFrame);
  }, [throttledFrame, updateAscii]);

  useEffect(() => {
    const animate = () => {
      setFrame((prevFrame) => (prevFrame + 1) % 60);
    };

    animationRef.current = setInterval(animate, speed);
    return () => {
      if (animationRef.current) clearInterval(animationRef.current);
    };
  }, [speed]);

  return (
    <div className={`font-mono whitespace-pre overflow-hidden break-normal leading-normal inline-block inset-0 select-none pointer-events-none ${color}`}>
      <pre>{asciiText}</pre>
    </div>
  );
};

export default AsciiEffect;
