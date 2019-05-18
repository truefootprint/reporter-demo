import css from "./styles.scss";

const Palette = () => <>
  <div className={css.section}>
    <p>Primary:</p>

    <span className={css.primary_900}>900</span>
    <span className={css.primary_800}>800</span>
    <span className={css.primary_700}>700</span>
    <span className={css.primary_600}>600</span>
    <span className={css.primary_500}>500</span>
    <span className={css.primary_400}>400</span>
    <span className={css.primary_300}>300</span>
    <span className={css.primary_200}>200</span>
    <span className={css.primary_100}>100</span>
  </div>

  <div className={css.section}>
    <p>Accent 1:</p>

    <span className={css.accent1_900}>900</span>
    <span className={css.accent1_800}>800</span>
    <span className={css.accent1_700}>700</span>
    <span className={css.accent1_600}>600</span>
    <span className={css.accent1_500}>500</span>
    <span className={css.accent1_400}>400</span>
    <span className={css.accent1_300}>300</span>
    <span className={css.accent1_200}>200</span>
    <span className={css.accent1_100}>100</span>
  </div>

  <div className={css.section}>
    <p>Accent 2:</p>

    <span className={css.accent2_900}>900</span>
    <span className={css.accent2_800}>800</span>
    <span className={css.accent2_700}>700</span>
    <span className={css.accent2_600}>600</span>
    <span className={css.accent2_500}>500</span>
    <span className={css.accent2_400}>400</span>
    <span className={css.accent2_300}>300</span>
    <span className={css.accent2_200}>200</span>
    <span className={css.accent2_100}>100</span>
  </div>

  <div className={css.section}>
    <p>Neutral:</p>

    <span className={css.neutral_900}>900</span>
    <span className={css.neutral_800}>800</span>
    <span className={css.neutral_700}>700</span>
    <span className={css.neutral_600}>600</span>
    <span className={css.neutral_500}>500</span>
    <span className={css.neutral_400}>400</span>
    <span className={css.neutral_300}>300</span>
    <span className={css.neutral_200}>200</span>
    <span className={css.neutral_100}>100</span>
  </div>
</>;

export default Palette;
