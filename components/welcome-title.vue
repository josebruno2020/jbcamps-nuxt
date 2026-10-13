<template>
  <div class="welcome-title">
    <p class="greeting">{{ $t('hero.greeting') }}</p>
    <h1 class="name">José Bruno <span class="surname">Campanholi dos Santos</span></h1>
    <p class="position">{{ $t('personal.position') }}</p>
    <p class="intro">{{ $t('hero.intro') }}</p>
  </div>
</template>

<style scoped>
.greeting {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--accent-warm);
}

.name {
  font-size: 3rem;
  margin: 4px 0 12px;
}

.surname {
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  opacity: .75;
  margin-top: 4px;
}

.position {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 999px;
  background: rgba(38, 166, 154, 0.18);
  color: #7fd8cf;
  font-weight: 700;
  font-size: .95rem;
}

.intro {
  margin-top: 20px;
  max-width: 520px;
  font-size: 1.15rem;
  opacity: .85;
}

@media (max-width: 800px) {
  .intro {
    margin-inline: auto;
  }

  .name {
    font-size: 2.2rem;
  }

  .surname {
    font-size: 1.2rem;
  }
}
</style>
