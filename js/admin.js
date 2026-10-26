/* Halaman admin SDG Quest: konfirmasi hapus, penghitung karakter, dan fokus ke formulir */

// minta konfirmasi sebelum menghapus
document.addEventListener('submit', e => {
  const f = e.target.closest('form[data-konfirmasi]');
  if (f && !confirm(f.dataset.konfirmasi)) e.preventDefault();
});

// penghitung karakter untuk isian yang punya batas panjang
document.querySelectorAll('#formSoal [maxlength]').forEach(el => {
  const out = document.createElement('small');
  out.className = 'hitung';
  out.setAttribute('aria-hidden', 'true');
  el.insertAdjacentElement('afterend', out);
  const ubah = () => {
    const n = el.value.length, maks = +el.getAttribute('maxlength');
    out.textContent = `${n} / ${maks}`;
    out.classList.toggle('penuh', n >= maks);
  };
  el.addEventListener('input', ubah);
  ubah();
});

// saat formulir tambah atau edit terbuka, langsung arahkan ke sana
const formSoal = document.getElementById('formSoal');
if (formSoal) {
  formSoal.scrollIntoView({ block: 'start' });
  const pertama = formSoal.querySelector('[aria-invalid="true"]') || formSoal.querySelector('textarea, input:not([type=hidden])');
  if (pertama) pertama.focus({ preventScroll: true });
}
