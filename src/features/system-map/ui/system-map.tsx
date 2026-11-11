const DESKTOP_SCHEME = (
  <svg
    viewBox="0 0 560 262"
    className="hidden w-full md:block"
    role="img"
    aria-label="Схема: телефон водителя передаёт координаты по WebSocket в Fastify, состояние публикуется в Redis Pub/Sub и уходит диспетчеру по SSE, история пишется в PostgreSQL."
  >
    <defs>
      <marker
        id="system-arrow"
        viewBox="0 0 8 8"
        refX="6"
        refY="4"
        markerWidth="7"
        markerHeight="7"
        orient="auto"
      >
        <path d="M0 0 L8 4 L0 8 z" fill="#7C8880" />
      </marker>
    </defs>

    <g stroke="#7C8880" fill="none" strokeWidth="1.3">
      <path d="M116 34 H540" markerEnd="url(#system-arrow)" />
      <path d="M60 34 V62 M212 34 V62 M364 34 V62 M480 34 V62" />
      <path d="M212 108 V170" strokeDasharray="3 4" />
    </g>

    <text x="4" y="22" fontSize="11.5" fill="#55605C">
      точки раз в 3 секунды
    </text>
    <circle className="system-dot" cx="120" cy="34" r="3.4" fill="#9C3A1B" />

    <g fill="#F2F4EE" stroke="#8E9A90" strokeWidth="1.1">
      <rect x="4" y="62" width="112" height="46" rx="2" />
      <rect x="156" y="62" width="112" height="46" rx="2" />
      <rect x="308" y="62" width="112" height="46" rx="2" />
      <rect x="444" y="62" width="112" height="46" rx="2" />
      <rect x="156" y="170" width="112" height="46" rx="2" />
    </g>

    <g fill="#12171A" fontSize="12.5" fontWeight="500">
      <text x="16" y="83">
        Телефон
      </text>
      <text x="168" y="83">
        Fastify
      </text>
      <text x="320" y="83">
        Redis
      </text>
      <text x="456" y="83">
        Диспетчер
      </text>
      <text x="168" y="191">
        PostgreSQL
      </text>
    </g>
    <g fill="#55605C" fontSize="11.5">
      <text x="16" y="99">
        драйвер, Expo
      </text>
      <text x="168" y="99">
        WebSocket
      </text>
      <text x="320" y="99">
        Pub/Sub
      </text>
      <text x="456" y="99">
        карта, SSE
      </text>
      <text x="168" y="207">
        история треков
      </text>
      <text x="4" y="248">
        офлайн-очередь в IndexedDB довозит точки после потери связи
      </text>
    </g>
  </svg>
);

const MOBILE_SCHEME = (
  <svg
    viewBox="0 0 340 470"
    className="block w-full max-w-[340px] md:hidden"
    role="img"
    aria-label="Схема: телефон водителя передаёт координаты по WebSocket в Fastify, состояние публикуется в Redis Pub/Sub и уходит диспетчеру; история пишется в PostgreSQL."
  >
    <g stroke="#7C8880" fill="none" strokeWidth="1.3">
      <path d="M110 60 V96 M110 148 V184 M110 236 V272" />
      <path d="M210 122 H300 V352 H150 V396" strokeDasharray="3 4" />
    </g>

    <g fill="#F2F4EE" stroke="#8E9A90" strokeWidth="1.1">
      <rect x="10" y="8" width="200" height="52" rx="2" />
      <rect x="10" y="96" width="200" height="52" rx="2" />
      <rect x="10" y="184" width="200" height="52" rx="2" />
      <rect x="10" y="272" width="200" height="52" rx="2" />
      <rect x="10" y="396" width="200" height="52" rx="2" />
    </g>

    <g fill="#12171A" fontSize="12.5" fontWeight="500">
      <text x="24" y="32">
        Телефон водителя
      </text>
      <text x="24" y="120">
        Fastify
      </text>
      <text x="24" y="208">
        Redis Pub/Sub
      </text>
      <text x="24" y="296">
        Диспетчер
      </text>
      <text x="24" y="420">
        PostgreSQL
      </text>
    </g>
    <g fill="#55605C" fontSize="11.5">
      <text x="24" y="49">
        Expo, офлайн-очередь
      </text>
      <text x="24" y="137">
        WebSocket, JWT
      </text>
      <text x="24" y="225">
        состояние парка
      </text>
      <text x="24" y="313">
        карта, SSE
      </text>
      <text x="24" y="437">
        история треков
      </text>
    </g>
    <circle className="system-dot" cx="110" cy="62" r="3.2" fill="#9C3A1B" />
  </svg>
);

/**
 * Единственный несобытийный жест на странице: точка данных едет по шине.
 * Схема описывает то, как реально устроен corporate-transport,
 * а не служит декоративным фоном.
 */
export function SystemMap() {
  return (
    <figure className="-mx-[var(--spacing-gutter)] border-y border-rule px-[var(--spacing-gutter)] pt-6 pb-3">
      {DESKTOP_SCHEME}
      {MOBILE_SCHEME}
      <figcaption className="flex flex-wrap justify-between gap-3 border-t border-rule pt-2 text-[13px] text-muted">
        <span>corporate-transport · GPS-телеметрия</span>
        <span>Fastify · Redis · PostgreSQL</span>
      </figcaption>
    </figure>
  );
}
