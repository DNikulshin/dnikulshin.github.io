'use client'; // теперь компонент клиентский, чтобы анимация работала

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/kit/card';
import { Badge } from '@/shared/ui/kit/badge';
import { SiGithub } from 'react-icons/si';
import { formatDate } from '@/shared/lib/date';
import type { Repository } from '@/services/github/_types';

interface ProjectCardProps {
  repo: Repository;
  index: number; // для задержки
}

export function ProjectCard({ repo, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-2xl transition-all duration-300 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 hover:-translate-y-1 h-full">
        <CardHeader>
          <CardTitle className="flex items-start justify-between text-lg">
            <span className="font-bold text-white group-hover:text-blue-400 transition-colors">
              {repo.name}
            </span>
            <span className="flex items-center gap-1 text-sm text-yellow-400/80">
              ⭐ {repo.stargazerCount}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-sm text-gray-300 line-clamp-2">{repo.description || 'Без описания'}</p>
          <div className="flex flex-wrap gap-2">
            {repo.primaryLanguage && (
              <Badge
                variant="secondary"
                className="text-xs font-medium"
                style={{
                  backgroundColor: repo.primaryLanguage.color || '#6b7280',
                  color: '#fff',
                }}
              >
                {repo.primaryLanguage.name}
              </Badge>
            )}
            {repo.repositoryTopics.nodes.slice(0, 3).map(({ topic }) => (
              <Badge
                key={topic.name}
                variant="outline"
                className="text-xs border-white/20 text-gray-300"
              >
                {topic.name}
              </Badge>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
            <span>Обновлено: {formatDate(repo.updatedAt)}</span>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <SiGithub size={14} /> Репозиторий
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
