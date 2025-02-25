<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;

class CompanyProfilePageController extends Controller
{
    /**
     * Provision a new web server.
     */
    public function __invoke()
    {
        return inertia('Company/CompanyProfile', [
            'title' => 'Profil Perusahaan',
            'companyLogo' => Storage::url('img/companyLogo.png'),
            'aboutImg' => Storage::url('img/ptldnmockup.jpg'),
            'structural' => Storage::url('assets/Struktur_Organisasi_2.svg'),
            'structuralRotate' => Storage::url('img/structuralRotate.jpg'),
        ]);
    }
}