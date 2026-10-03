# Model interrogates the Red Teams

3 October 2026. Working note. Not a public snapshot. It does not replace v0.1. It does not close any EC. It does not define the numerical success test.

**The model does not resolve uncertainty. It makes uncertainty compete.**

## Decision

After EC-09, more Red Teams are diminishing returns unless the model produces a new object. An open EC does not block the model. Otherwise the work is circular: you need the model to see which uncertainties matter, but you refuse every uncertainty until an EC has closed it.

Every number is tagged. A number without a tag does not enter.

| Tag | Public French | Meaning |
| --- | --- | --- |
| **O** | observé | Dated source; copyable |
| **S** | sourcé | Published study or legal rate; **not** the Pacte |
| **Σ** | scénario | Chosen for a trajectory; justification beside the cell |
| **ƒ** | calculé | Output of identities given O / S / Σ |

**C is only the Central trajectory.** Never a tag.

Chain: evidence → tagged ports → scenarios → model → dominance → targeted Red Team. No EC-10 until a **new object** appears, not a new coefficient.

## Four trajectories

Defined as **semantic families** first, then numbers. Not three arbitrary percentage vectors.

| Id | Family | One sentence |
| --- | --- | --- |
| **R** | Reference France without Pacte | Counterfactual 2027–2040 against which C/W/A are measured. Credit path = 0. Every R driver is tagged; nothing is “today extrapolated” in silence. |
| **C** | Central Pacte | Frozen net IO path + allocation **Diversifié-1** (plausible diversified use of released equity). Not a proof of the thesis. |
| **W** | Weak-transmission Pacte | Same credit path + allocation **Fuites-1** (leakage-heavy). Encours can still rise. |
| **A** | Combined adverse Pacte | **V2 adverse macro shock + allocation Fuites-2 + stop-rule delay of 4 quarters.** |
| **A₀** | Adverse France without Pacte | Same V2 macro as A; credit = 0. The shock, not the Pacte. |

A is mechanically identifiable. Later sensitivity removes one component at a time. Do not replace A with a generic “bad case.”

## What v0.1 still is

Public `/documents/modele` · `2026-09-28`. 0,65 × 0,35 is an untested product. 25 / 50 / 75 % are spend-sum probes, not a basket. Nominal debt held constant. Not this note. Do not patch it.

## Credit path — four series, not one “700”

The public scenario’s annual column (EC-04) is **net new part à intérêts seuls**, Md€:

25, 45, 65, 80, 90, 90, 80, 70, 55, 40, 30, 20, 10, 0 (2027–2040). The column sums to 700.

That 700 has been used as cumulative mobilisation. With a **20-year** interest-only product (EC-05 reference) and issuance in 2027–2040, **scheduled principal need not amortise before 2040**. Cumulative originations and end-2040 outstanding can therefore be close **numerically** and still be **different objects**.

The workbook carries four series, every year:

1. **Gross annual originations**
2. **Cumulative originations**
3. **Repayments / prepayments** (scheduled + voluntary)
4. **Outstanding IO principal**

Identities (ƒ):

- outstanding(t) = outstanding(t−1) + gross(t) − repayments(t)
- cumulative(t) = cumulative(t−1) + gross(t)
- net new(t) = gross(t) − repayments(t)  (this is the EC-04 column **if** repayments are defined)

Phase 1 Σ, with justification:

| Cell | Tag | Value | Justification |
| --- | --- | --- | --- |
| Product maturity | Σ | 20 years | EC-05 reference; 10 / 30 are sensitivities, not this run |
| Scheduled amortisation of IO principal before maturity | Σ | 0 | Product is interest-only; EC-05: principal remains until bullet |
| First scheduled bullets | ƒ | 2047 for the 2027 vintage; thereafter each vintage matures 20 years after origination | A 20-year maturity. Not a 2040 event. No Jan/Dec split. |
| Prepayment / extra repayment 2027–2040 | Σ | 0 | EC-05: do not import observed SFH CPRs onto the Pacte |
| Therefore gross(t) | ƒ | = net new(t) from EC-04 | Because repayments Σ = 0 |
| Cumulative originations end-2040 | ƒ | 700 Md€ | Sum of gross |
| Outstanding IO end-2040 | ƒ | 700 Md€ | Same, only because repayments are 0 — **not** by definition of “700” |
| EC-04 column in 2040 | Σ | net new = 0 | Flow of *new* IO is zero; outstanding is not |

If a later run sets prepayment ≠ 0, gross, cumulative, and outstanding **diverge**. That is the point of keeping four series — so EC-04 (impulse), EC-05 (stock to fund), EC-08 (collateral on outstanding) do not tangle.

## Household cash service — explicit outputs

The Pacte is a household mechanism before it is a macro impulse. Dominance must show **both**:

1. **Cash released / monthly amortisation avoided** — ƒ vs an equivalent amortising loan on the same principal and rate (comparison rate Σ: 3,30 % used in EC-05 WAL arithmetic; not a forecast of the Pacte rate).
2. **Interest service of the year + outstanding IO principal carried forward** — ƒ from the four credit series and the household rate (Σ).

Do not bury (1) under “defaults.” Defaults / effort remain a separate output, fed by unemployment and income in A.

## R — the counterfactual, fully tagged

R is not “today extrapolated.” C − R looks precise if an untagged R driver does the work. Every R path is O, S, or Σ.

| Port | Tag | Phase 1 value | Justification |
| --- | --- | --- | --- |
| Pacte credit | Σ | 0 | Definition of R |
| Real growth (underlying) | Σ | +1,0 % / year | Public résumé working saisie, 2026-10-03. **Not** an Insee potential-output estimate. Competes with A’s recession gap. |
| GDP deflator | Σ | +2,5 % / year | Same résumé saisie. Not 2025 HICP (O: +0,9 %). Housing prices are not this deflator. |
| Nominal public spending (ex-interest rule of thumb) | Σ | +2,0 % / year | Same résumé saisie. Interest is a separate EC-07 series, ƒ. |
| Unemployment | O start + Σ path | 7,7 % BIT 2025 held constant in R | O: Insee, enquête Emploi 2025, moyenne annuelle France hors Mayotte. Path Σ flat. |
| Sovereign refinancing rate on new/rolled debt | Σ | 2,91 % | O: AFT 2024 MLT issuance average. Path: hold constant. Not the 2025 average cost of the whole stock. |
| 2025 public accounts (levels) | O | deficit 5,1 % / 152,5 Md€; debt 115,7 % / 3 460,5 Md€; interest 64,7 Md€ | Insee IR 78 / Première 2106. Start, not 2040. |
| Housing prices (R) | Σ | follow the GDP deflator | Neutral real house prices. Not a boom; not V2 −30 %. |
| Housing transaction volumes (R) | Σ | hold 2024 order of magnitude | SDES old-dwelling acquisitions 198,9 Md€ is O *level*, not a Pacte share. Path Σ flat in real terms. |

The résumé gap 1,5–3,2 points is ƒ under these Σ. It is not R’s deficit. R’s primary, interest, balance, stock, ratio, Spread are ƒ from the EC-07 recursion with credit = 0.

If R is later replaced by a sourced official baseline (PLF / DG Trésor), retag those cells S and rerun. Until then the résumé saisies stay Σ so C − R cannot hide them.

## Named allocations (EC-02) — then numbers

Labels in the workbook: **Trav, Conso, Inv, Exist, Liq, Sub, Trf**. Do not reuse R/C/A for uses.

Shares of **one euro drawn**. Each named vector sums to 1. Additional spend = Trav + Conso + Inv.

### Diversifié-1 — used by C

Semantic: plausible diversified use of released equity. Not “the French MPC.” Not 0,65.

| Use | Σ | Justification |
| ---: | ---: | --- |
| Trav | 0,28 | Reservoir concentrated at 50–79 and the top of wealth (Insee Focus 371, O/S). Among uses that *are* spent, works are the least implausible (UK MEW as **counter-test**, not a 75 % prior). V2 aims renovation of the existing stock. |
| Conso | 0,12 | French wealth-effect MPC is ~0,5–1,1 centime / € (Arrondel et al., S) and weaker at the top. A liquidity channel can exceed that, but a high consumption share would ignore the distribution. |
| Inv | 0,05 | HFCS: professional use exists in France (S), not the mass of the reservoir. |
| Exist | 0,15 | HFCS: collateral often another property (S). Not additional demand (EC-02); DMTO possible (EC-06). |
| Liq | 0,15 | Buffer / “not spent yet.” UK MEW: large share of gross withdrawal is not near-term spend (S, not a prior). |
| Sub | 0,15 | Debt substitution: plausible where remaining amortising housing debt exists; not additional demand. |
| Trf | 0,10 | Age of the reservoir: transfers / early transmission are in V2’s menu. Follow the receiver; do not double-count. |
| **Sum** | **1,00** | |
| **Additional spend** | **0,45** | ƒ. Near the old 50 % *probe on the sum*, now a **basket**. Not a chosen 50 % case. |

Conso split for EC-03, Σ: **half goods, half services**. No French Pacte basket exists; the split is a visibility device so manufactures vs local services can compete. Not a prior.

### Fuites-1 — used by W

Semantic: leakage-heavy — saving / liquid assets, existing assets, debt repayment, transfers.

| Use | Σ | Justification |
| ---: | ---: | --- |
| Trav | 0,08 | Some works remain plausible; not the story of W. |
| Conso | 0,05 | Low MPC + old/rich reservoir. |
| Inv | 0,02 | Residual. |
| Exist | 0,20 | Other property / titles. |
| Liq | 0,25 | Dominant leak: credit as balance-sheet, not demand. |
| Sub | 0,22 | Pay down other debt. |
| Trf | 0,18 | Transmission without spend by the drawer. |
| **Sum** | **1,00** | |
| **Additional spend** | **0,15** | ƒ. Below the 25 % probe on purpose: W is “the chain has little to tax or produce,” not a 25 % central. |

### Fuites-2 — used by A

Semantic: still leakage-heavy, but **identifiably more existing assets** than Fuites-1, so housing/DMTO and thin volume can be switched off separately later.

| Use | Σ | Justification |
| ---: | ---: | --- |
| Trav | 0,05 | Thinner works than Fuites-1. |
| Conso | 0,04 | Thinner consumption. |
| Inv | 0,01 | Almost none. |
| Exist | 0,30 | The wedge vs Fuites-1: existing homes/titles. Combined with V2 −30 %, this is the DMTO/collateral channel, not “more of the same leak.” |
| Liq | 0,22 | Still a large cash leak. |
| Sub | 0,20 | |
| Trf | 0,18 | |
| **Sum** | **1,00** | |
| **Additional spend** | **0,10** | ƒ. |

These three vectors are **Σ**, not estimates. UK shares are not copied. 0,65 is not used.

## A — one sentence, then the Σ block

**A = choc macro V2 (récession, chômage, immobilier −30 %, taux durablement élevés) + allocation Fuites-2 + délai de frein de 4 trimestres.**

| Cell | Tag | Value | Justification |
| --- | --- | --- | --- |
| Real growth vs R | Σ | R − 1,5 pp in 2028–2030, then back to R | V2 requires a recession, not a calibrated Insee path. Round gap so it can be removed in sensitivity. |
| Unemployment vs R | Σ | R + 2 pp over the same window, then back | Bridge to household service and defaults (EC-09 sixth strand). Not a NAIRU model. |
| Housing-price index (A) | Σ | 2027 = 100; 70 by 2030; held at 70 thereafter | V2 « baisse de 30 % » as a **nominal** decline from the 2027 starting level, not 30 % below R. R’s index follows the deflator from 100, so the two paths diverge by more than 30 points. Workbook encodes the index; no other reading. |
| Sovereign refinancing rate vs R | Σ | R + 200 bp from 2028 | “Taux durablement élevés.” Identifiable; remove in sensitivity. |
| Household IO rate | Σ | same +200 bp vs C/W household rate | Service cash, not just public interest. |
| Allocation | Σ | **Fuites-2** | Named. Not “worse W.” |
| Stop lights (policy) | S | V2 list | Thresholds remain empty as *policy*. They do not close EC-09. |
| First-light convention **for this run only** | Σ | Calendar year **2028** = first year of the V2 recession window | Temporary clock, not a dashboard threshold. Without it the 4-quarter delay has no start. Ablation: change the clock. |
| Stop delay | Σ | 4 quarters after first light → originations stop **from 2029 inclusive** | 2027 and 2028 vintages still issued. Tests “frein on the flow, stock remains.” |
| Housing-price *acceleration* light | — | does not fire on a *fall* | EC-09: two different lights. A’s index-to-70 is the fall strand. |

C and W: stop rules **off** (Σ), so A’s delay can compete as its own component.

## Ports still waiting for Phase 2 numbers

Tagged, not filled here (identities already written in EC-03 / EC-06 / EC-07):

- Per-category volume / import / price / substitution (do not paste 78 / 38 / 96 % as Pacte parameters; those stay **S** 2019 averages)
- Marginal receipts by base (do not paste 43,6 %)
- Household IO contractual rate in C/W (needs a Σ at workbook build; comparison 3,30 % is only the amortising counterfactual)
- Stop *policy* thresholds (empty). A’s **run clock** is the 2028 first-light convention above, not those thresholds.

A run in Phase 2 may use temporary Σ pass-throughs for EC-03 / EC-06, each with a one-line justification, without closing the EC.

## Dominance (Phase 2)

Compare **C − R**, **W − R**, **A − R**, and one-at-a-time removals inside A, on:

- real French volume
- public receipts
- primary, interest, balance, stock, ratio, Spread
- **household cash released / amortisation avoided**
- **household interest service + outstanding IO principal**
- defaults / effort
- bank refinancing need (gross vs outstanding)

If one Σ swing explains most of the gap, deepen that EC. If none does and paths stay inside owner-stated tolerances, that is a finding. Neither closes an open verdict.

## Inventory (O / S still in force)

Unchanged in substance from Phase 0. Calculated cells that were marked “C” in the first inventory are **ƒ**. Allocation letters R,C,I,A,L,D,T are retired.

Notable O/S: Insee Analyses 89 contents; SDES 2024 flows; Dares labour; AFT 2024; Insee 2025 accounts; VAT legal rates; Chapelle ~0,5; Arrondel MPC; HFCS; BoE MEW as counter-test.

## What this note does not do

It does not edit v0.1. It does not treat Diversifié-1 / Fuites-1 / Fuites-2 as estimates. It does not open EC-10. It does not treat a ƒ as an EC verdict. Phase 2 is the tagged workbook (`Docs/20_Model_Phase2.xlsx`, built by `scripts/modelPhase2.py`). Public snapshot is Phase 3.
