import { Routes } from "@angular/router";
import { AuthGuard } from "@guards/auth.guard";
import { Error404 } from "@errors/404.component";
import { Beranda } from "@views/unregistered/beranda/beranda.component";
import { TentangKami } from "@views/unregistered/tentang-kami/tentang-kami.component";
import { Kontak } from "@views/unregistered/kontak/kontak.component";
import { Masuk } from "@views/unregistered/masuk/masuk.component";
import { Daftar } from "@views/unregistered/daftar/daftar.component";
import { DasborAdmin } from "@views/admin/dasbor/dasbor.component";
import { DasborPengguna } from "@views/users/dasbor/dasbor.component";
import { RekapKesehatan } from "@views/users/rekap-kesehatan/rekap-kesehatan.component";

export const routes: Routes = [
  /**
   * Perutean untuk pengguna yang belum terautentikasi.
   */
  { path: "", component: Beranda },
  { path: "tentang-kami", component: TentangKami },
  { path: "kontak", component: Kontak },
  { path: "masuk", component: Masuk },
  { path: "daftar", component: Daftar },

  /**
   * Perutean untuk admin.
   */
  { path: "admin/dasbor", component: DasborAdmin, canActivate: [AuthGuard] },

  /**
   * Perutean untuk pengguna.
   */
  { path: "pengguna/dasbor", component: DasborPengguna, canActivate: [AuthGuard] },
  { path: "pengguna/rekap-kesehatan", component: RekapKesehatan, canActivate: [AuthGuard] },

  /**
   * Perutean jika halaman tidak ditemukan.
   */
  { path: "**", component: Error404 },
];