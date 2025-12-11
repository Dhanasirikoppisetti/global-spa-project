
// scripts/check-translations.js
const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '..', 'public', 'locales');
const languages = ['en', 'es', 'ar', 'ja'];
const namespaces = ['common', 'product'];

function getAllKeys(obj, prefix = '') {
  let keys = [];
  for (const key in obj) {
    const fullKey = prefix ? prefix + '.' + key : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      keys = keys.concat(getAllKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

let hasErrors = false;
let totalKeys = 0;

console.log('\n🔍 Checking translation parity across all languages...\n');
console.log('=' .repeat(60));

namespaces.forEach(ns => {
  console.log('\n📁 Namespace: ' + ns);
  console.log('-'.repeat(60));
  
  const allKeys = new Set();
  const langKeys = {};

  // Load all language files
  languages.forEach(lang => {
    const filePath = path.join(localesDir, lang, ns + '.json');
    
    if (fs.existsSync(filePath)) {
      try {
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const keys = getAllKeys(content);
        langKeys[lang] = new Set(keys);
        keys.forEach(k => allKeys.add(k));
        console.log('  ✓ ' + lang.toUpperCase() + ': ' + keys.length + ' keys found');
      } catch (error) {
        console.error('  ❌ Error parsing ' + lang + ': ' + error.message);
        hasErrors = true;
      }
    } else {
      console.error('  ❌ Missing file: ' + filePath);
      hasErrors = true;
    }
  });

  totalKeys += allKeys.size;

  // Check for missing keys
  let missingCount = 0;
  allKeys.forEach(key => {
    const missing = languages.filter(lang => {
      return !langKeys[lang] || !langKeys[lang].has(key);
    });
    
    if (missing.length > 0) {
      if (missingCount === 0) {
        console.log('\n  ⚠️  Missing Keys:');
      }
      console.error('     - "' + key + '" missing in: ' + missing.join(', '));
      hasErrors = true;
      missingCount++;
    }
  });

  if (missingCount === 0) {
    console.log('\n  ✅ All keys present in all languages!');
  } else {
    console.log('\n  ❌ ' + missingCount + ' key(s) with missing translations');
  }
});

console.log('\n' + '='.repeat(60));
console.log('\n📊 Summary:');
console.log('   Languages: ' + languages.length);
console.log('   Namespaces: ' + namespaces.length);
console.log('   Total unique keys: ' + totalKeys);

if (hasErrors) {
  console.error('\n❌ FAILED: Translation parity check found issues!\n');
  process.exit(1);
} else {
  console.log('\n✅ SUCCESS: All translations have complete parity!\n');
  process.exit(0);
}
