import React from 'react';

/** Avatar — circular user badge with initials (or an image). */
export function Avatar({ initials = 'AM', src = null, size = 34, style = {}, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: 'var(--radius-pill)',
        background: src ? 'transparent' : 'var(--color-primary)',
        color: '#fff',
        fontFamily: 'var(--font-sans)',
        fontSize: Math.round(size * 0.38),
        fontWeight: 'var(--font-weight-semibold)',
        letterSpacing: '0.02em',
        overflow: 'hidden',
        flex: '0 0 auto',
        ...style,
      }}
      {...rest}
    >
      {src ? <img src={src} alt={initials} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </span>
  );
}
