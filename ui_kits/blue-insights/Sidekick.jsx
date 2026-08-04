// Blue Insights UI kit — the Research sidekick panel and its states.
const { useState } = React;
const DS = window.TomoroDesignSystem_e2b93e;
const { Button, IconButton, FindingSection, AiChip, SourceRow, RefBadge, StepList, Alert, Badge } = DS;

const Ico = {
  chevrons: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>,
  share: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>,
  lock: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  bookmark: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>,
  chevDown: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  back: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>,
  ext: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>,
};

const eyebrow = { fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)' };
const claim = { fontSize: 14, color: 'var(--color-text-primary)', lineHeight: 1.5, display: 'flex', alignItems: 'baseline', gap: 6 };

function PanelHeader({ onShare, onCollapse, showShare = true }) {
  return (
    <div style={{ padding: '16px 20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', gap: 11 }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--color-primary)', marginTop: 6, flex: '0 0 auto' }} />
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text-primary)' }}>Research sidekick</div>
            <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Show your working</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {showShare ? <Button variant="secondary" size="sm" leadingIcon={Ico.share} onClick={onShare}>Share / export</Button> : null}
          <IconButton variant="ghost" ariaLabel="Collapse panel" onClick={onCollapse}>{Ico.chevrons}</IconButton>
        </div>
      </div>
    </div>
  );
}

function GoalStrip({ status = 'waiting', line }) {
  const working = status === 'working';
  return (
    <div style={{ padding: '14px 20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: -6 }}>
            <span style={{ width: 26, height: 26, borderRadius: 999, background: 'var(--color-primary)', color: '#fff', fontSize: 10, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>AR</span>
            <span style={{ width: 14, height: 14, borderRadius: 999, background: working ? 'var(--color-primary)' : 'var(--color-secondary-alt)', marginLeft: -6, border: '2px solid var(--color-canvas)' }} />
          </span>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>Shared goal: an answer you can defend.</span>
        </div>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 600, color: working ? 'var(--color-primary)' : 'var(--color-warning)' }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: 'currentColor' }} />{working ? 'Agent working' : 'Waiting for you'}
        </span>
      </div>
      <div style={{ height: 3, background: 'var(--color-primary)', borderRadius: 999, marginTop: 12, width: '62%' }} />
      <div style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', marginTop: 12 }}>{line}</div>
    </div>
  );
}

// ---- Answer state ----
function AnswerBody({ onExpandAssumption, expandedAssumption, onPreview, onRerunAssumption }) {
  const [openEvidence, setOpenEvidence] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);

  return (
    <div style={{ padding: '4px 20px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div>
        <div style={{ ...eyebrow, marginBottom: 6 }}>Summary</div>
        <div style={{ fontSize: 15.5, color: 'var(--color-text-primary)', lineHeight: 1.55 }}>Q3 revenue fell 12% QoQ. The drop is concentrated in the EMEA enterprise segment, mostly from delayed renewals.</div>
      </div>

      <FindingSection tone="evidence" label="Evidence" meta="3 facts" open={openEvidence} onToggle={() => setOpenEvidence(!openEvidence)}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 4 }}>
          <div>
            <div style={{ ...claim, justifyContent: 'space-between' }}>
              <span>EMEA enterprise renewals fell <b>28%</b> vs prior quarter <RefBadge n={1} onClick={() => onPreview(1)} /></span>
              <button onClick={() => setWhyOpen(!whyOpen)} style={{ border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 12.5, fontWeight: 600, padding: '3px 10px', borderRadius: 6, background: whyOpen ? 'var(--color-text-primary)' : 'transparent', color: whyOpen ? '#fff' : 'var(--color-text-muted)' }}>Why?</button>
            </div>
            {whyOpen ? <div style={{ borderLeft: '2px solid var(--color-primary)', paddingLeft: 12, marginTop: 8, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Compared recognised renewal revenue for the EMEA enterprise segment in Q3 against Q2 in the warehouse rollup; the −28% is the raw QoQ delta.</div> : null}
          </div>
          <div style={{ ...claim, justifyContent: 'space-between' }}><span><b>12</b> accounts pushed renewal into Q4 <RefBadge n={2} onClick={() => onPreview(2)} /></span><span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--color-text-muted)' }}>Why?</span></div>
          <div style={{ ...claim, justifyContent: 'space-between' }}><span>New-business bookings were <b>flat</b>, not down <RefBadge n={3} onClick={() => onPreview(3)} /></span><span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--color-text-muted)' }}>Why?</span></div>
        </div>
      </FindingSection>

      <FindingSection tone="assumption" label="Assumption" open={expandedAssumption} onToggle={onExpandAssumption}>
        <div style={{ marginTop: 4 }}>
          <div style={{ fontSize: 14, color: 'var(--color-text-primary)', lineHeight: 1.5 }}>Assumes the <b>4</b> renewals still "in negotiation" are treated as churned <RefBadge n={2} onClick={() => onPreview(2)} />.</div>
          {expandedAssumption ? (
            <div style={{ marginTop: 14, border: '1px solid var(--color-warning)', borderRadius: 'var(--radius-lg)', padding: 14 }}>
              <div style={{ ...eyebrow, color: 'var(--color-warning)', marginBottom: 8 }}>What's wrong with this assumption?</div>
              <textarea rows={3} placeholder="" style={{ width: '100%', boxSizing: 'border-box', resize: 'vertical', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 10, fontFamily: 'var(--font-sans)', fontSize: 13, outline: 'none' }} />
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 12, marginTop: 12 }}>
                <button onClick={onExpandAssumption} style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Cancel</button>
                <Button size="sm" onClick={onRerunAssumption}>Re-run with this</Button>
              </div>
            </div>
          ) : (
            <div style={{ marginTop: 12 }}><Button variant="outlinePrimary" size="sm" style={{ borderColor: 'var(--color-warning)', color: 'var(--color-warning)' }} onClick={onExpandAssumption}>This doesn't hold</Button></div>
          )}
        </div>
      </FindingSection>

      <FindingSection tone="unknown" label="Unknown" open onToggle={() => {}}>
        <div style={{ marginTop: 4 }}>
          <div style={{ fontSize: 14, color: 'var(--color-text-primary)', lineHeight: 1.5 }}>Can't confirm whether Q3 discount changes affected deal size — that data isn't in your permitted scope.</div>
          <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '10px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ color: 'var(--color-error)', display: 'inline-flex' }}>{Ico.lock}</span>
              <div><div style={{ fontSize: 13.5, color: 'var(--color-text-primary)' }}>Salesforce — EMEA opportunities</div><div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.04em', color: 'var(--color-error)' }}>RESTRICTED</div></div>
            </div>
            <Button variant="outlinePrimary" size="sm">Request access</Button>
          </div>
        </div>
      </FindingSection>

      {/* suggested next check */}
      <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div><div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>Suggested next check</div><div style={{ fontSize: 15, color: 'var(--color-text-primary)', marginTop: 6 }}>Compare EMEA renewal cohort to APAC</div></div>
        <Button size="sm">Run check</Button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <Button variant="secondary" leadingIcon={Ico.bookmark} style={{ flex: 1, color: 'var(--color-primary)' }}>Save as repeatable check</Button>
        <Button variant="secondary" trailingIcon={Ico.chevDown}>Re-run</Button>
      </div>

      <div>
        <div style={{ ...eyebrow, margin: '6px 0 4px' }}>Sources in scope</div>
        <SourceRow n={1} name="Revenue warehouse — Q3 rollup" onAction={() => onPreview(1)} />
        <SourceRow n={2} name="Renewals tracker (CSV)" onAction={() => onPreview(2)} />
        <SourceRow n={3} name="Bookings — new business" onAction={() => onPreview(3)} />
      </div>
    </div>
  );
}

// ---- Source preview state ----
const SOURCES = {
  1: { name: 'Revenue warehouse — Q3 rollup', kind: 'Warehouse view · read-only', updated: 'Updated 28 Jul 2026, 06:00 UTC', note: 'Materialised from fct_revenue nightly. EMEA / enterprise segment, recognised revenue.', values: [['EMEA enterprise renewals (Q2)', '$4.10M'], ['EMEA enterprise renewals (Q3)', '$2.95M'], ['Change QoQ', '−28.0%']] },
  2: { name: 'Renewals tracker (CSV)', kind: 'Uploaded file · read-only', updated: 'Updated 27 Jul 2026, 18:20 UTC', note: 'Per-account renewal status; 12 accounts flagged pushed to Q4, 4 still in negotiation.', values: [['Accounts pushed to Q4', '12'], ['Still in negotiation', '4'], ['Closed lost', '1']] },
  3: { name: 'Bookings — new business', kind: 'Warehouse view · read-only', updated: 'Updated 28 Jul 2026, 06:00 UTC', note: 'New-business bookings by quarter, all segments.', values: [['New business (Q2)', '$3.20M'], ['New business (Q3)', '$3.18M'], ['Change QoQ', '−0.6%']] },
};

function SourcePreview({ id, onBack }) {
  const s = SOURCES[id] || SOURCES[1];
  return (
    <div style={{ padding: '16px 20px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 6, border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--color-primary)', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 700 }}>{Ico.back} Back to answer</button>
        <span style={{ ...eyebrow }}>Source preview</span>
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
        <span style={{ width: 28, height: 28, borderRadius: 6, background: 'var(--color-primary)', color: '#fff', fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>{id}</span>
        <div><div style={{ fontSize: 18, fontWeight: 600, color: 'var(--color-text-primary)' }}>{s.name}</div><div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>{s.kind}</div></div>
      </div>
      <div style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', marginTop: 18 }}>{s.updated}</div>
      <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '14px 16px', marginTop: 10, fontSize: 14, color: 'var(--color-text-primary)', lineHeight: 1.5 }}>{s.note}</div>
      <div style={{ ...eyebrow, margin: '20px 0 4px' }}>Referenced values</div>
      {s.values.map(([k, v], i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderTop: i ? '1px solid var(--color-border)' : 'none', fontSize: 14 }}>
          <span style={{ color: 'var(--color-text-secondary)' }}>{k}</span><span style={{ fontWeight: 600, color: 'var(--color-text-primary)', fontFeatureSettings: "'tnum' 1" }}>{v}</span>
        </div>
      ))}
      <Button fullWidth size="lg" trailingIcon={Ico.ext} style={{ marginTop: 20 }}>Open source</Button>
    </div>
  );
}

// ---- Loading state ----
function LoadingBody() {
  return (
    <div style={{ padding: '24px 20px' }}>
      <StepList steps={[
        { label: 'Analysing the annotation', state: 'done' },
        { label: 'Retrieving sources you can access', state: 'active', note: '3/3…' },
        { label: 'Checking the figures', state: 'pending' },
        { label: 'Drafting the explanation', state: 'pending' },
      ]} />
    </div>
  );
}

function Sidekick({ mode, previewId, onShare, onCollapse, onPreview, onBack, expandedAssumption, onExpandAssumption, onRerunAssumption }) {
  return (
    <aside style={{ width: 460, flex: '0 0 460px', borderLeft: '1px solid var(--color-border)', background: 'var(--color-canvas)', overflowY: 'auto', height: '100%' }}>
      {mode === 'preview' ? (
        <SourcePreview id={previewId} onBack={onBack} />
      ) : mode === 'loading' ? (
        <>
          <PanelHeader onShare={onShare} onCollapse={onCollapse} showShare={false} />
          <GoalStrip status="working" line="Retrieving 3 sources you can access…" />
          <LoadingBody />
        </>
      ) : (
        <>
          <PanelHeader onShare={onShare} onCollapse={onCollapse} />
          <GoalStrip status="waiting" line="Done — your move." />
          <div style={{ height: 12 }} />
          <AnswerBody onPreview={onPreview} expandedAssumption={expandedAssumption} onExpandAssumption={onExpandAssumption} onRerunAssumption={onRerunAssumption} />
        </>
      )}
    </aside>
  );
}
window.Sidekick = Sidekick;
