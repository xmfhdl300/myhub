/**
 * Hanging Incandescent Lamp (상단 고정 백열등 & 조명 연동 다크모드)
 * - 상단 중앙에 짙은 회색 줄과 하얀색 원형 백열등 배치
 * - 평소(불 켜짐): 현재 밝은 테마 유지
 * - 전구 클릭(불 꺼짐): 사이트 전체 밝기가 어둡게 전환 (Dark Mode)
 */

export function initHangingLamp(): void {
  const assemblyEl = document.getElementById('lamp-assembly') as HTMLElement | null;
  const bulbEl = document.getElementById('lamp-bulb') as HTMLElement | null;

  if (!assemblyEl || !bulbEl) return;
  const assembly = assemblyEl;
  const bulb = bulbEl;

  const wire = assembly.querySelector('.lamp-wire') as HTMLElement | null;
  const socket = assembly.querySelector('.lamp-socket') as HTMLElement | null;

  // 회전 축을 천장 마운트 지점(상단 중앙)으로 설정
  assembly.style.transformOrigin = 'top center';
  assembly.style.transform = 'none';

  // 초기 상태: 평소에는 불이 켜져 있는 상태(is-lit) 유지 -> 사이트 밝은 테마
  const initialLit = assembly.classList.contains('is-lit');
  document.body.classList.toggle('lights-off', !initialLit);

  // --- 감쇠 진자(Damped Harmonic Pendulum) 물리 시뮬레이션 ---
  let angle = 0;          // 현재 각도 (도)
  let velocity = 0;       // 각속도
  const stiffness = 0.08; // 복원력 스프링 계수
  const damping = 0.94;   // 감쇠율 (자연스러운 공기 저항)
  let animId: number | null = null;

  function stepPhysics(): void {
    const force = -stiffness * angle;
    velocity = (velocity + force) * damping;
    angle += velocity;

    // 미세 흔들림 종료 임계값 도달 시 정지
    if (Math.abs(angle) < 0.03 && Math.abs(velocity) < 0.03) {
      angle = 0;
      velocity = 0;
      assembly.style.transform = 'none';
      animId = null;
      return;
    }

    // 과도한 흔들림 방지 (최대 ±14도 제한)
    angle = Math.max(-14, Math.min(14, angle));
    assembly.style.transform = `rotate(${angle.toFixed(2)}deg)`;
    animId = requestAnimationFrame(stepPhysics);
  }

  function startPhysics(): void {
    if (animId === null) {
      animId = requestAnimationFrame(stepPhysics);
    }
  }

  // 외부 물리 충격(임펄스) 전달
  function nudge(impulse: number): void {
    velocity += impulse;
    velocity = Math.max(-7, Math.min(7, velocity));
    startPhysics();
  }

  // 백열등 클릭 시 On/Off 토글 및 사이트 밝기 연동 + 가벼운 클릭 반동
  function toggleLight(): void {
    const isLit = assembly?.classList.toggle('is-lit') ?? false;
    document.body.classList.toggle('lights-off', !isLit);
    nudge(Math.random() > 0.5 ? 2.5 : -2.5);
  }

  // 마우스 이동 시 이동 속도와 방향에 반응하여 건드린 듯 흔들림
  let prevMouseX = 0;
  function handleMouseMove(e: MouseEvent): void {
    if (prevMouseX !== 0) {
      const deltaX = e.clientX - prevMouseX;
      if (Math.abs(deltaX) > 0.5) {
        nudge(deltaX * 0.18);
      }
    }
    prevMouseX = e.clientX;
  }

  function handleMouseEnter(e: MouseEvent): void {
    prevMouseX = e.clientX;
    const rect = bulb.getBoundingClientRect();
    const isFromLeft = e.clientX < rect.left + rect.width / 2;
    nudge(isFromLeft ? 2.4 : -2.4);
  }

  function handleMouseLeave(): void {
    prevMouseX = 0;
  }

  // 전구 이벤트 등록
  bulb.addEventListener('mouseenter', handleMouseEnter);
  bulb.addEventListener('mousemove', handleMouseMove);
  bulb.addEventListener('mouseleave', handleMouseLeave);

  // 전선 및 소켓에도 마우스 반응 추가
  if (wire) {
    wire.addEventListener('mouseenter', handleMouseEnter);
    wire.addEventListener('mousemove', handleMouseMove);
  }
  if (socket) {
    socket.addEventListener('mouseenter', handleMouseEnter);
    socket.addEventListener('mousemove', handleMouseMove);
  }

  // 모바일 터치 반응
  let touchStartX = 0;
  bulb.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      touchStartX = e.touches[0].clientX;
      nudge(2.5);
    }
  }, { passive: true });

  bulb.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const dx = e.touches[0].clientX - touchStartX;
      touchStartX = e.touches[0].clientX;
      if (Math.abs(dx) > 1) {
        nudge(dx * 0.22);
      }
    }
  }, { passive: true });

  // 클릭 이벤트 (조명 On/Off)
  bulb.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleLight();
  });

  bulb.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleLight();
    }
  });
}
