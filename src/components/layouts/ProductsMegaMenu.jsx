"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductWithCategories } from "@/data/ProductMegaMenu";

const CategoryIcon = ({ type }) => {
  const icons = {
    drums: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="26"
        viewBox="0 0 20 26"
        fill="none"
      >
        <path
          d="M9.66602 0C14.9127 0 19.166 2.12505 19.166 4.74609L19.1533 4.99023C19.1243 5.27635 19.0421 5.55466 18.916 5.8252V20.7822C18.9157 21.2687 18.5678 21.6733 18.1074 21.7627L18.5801 22.2959V22.2969L18.5781 22.2979C18.5769 22.2989 18.5748 22.3004 18.5732 22.3018C18.57 22.3046 18.5661 22.3085 18.5615 22.3125C18.5522 22.3206 18.5394 22.3312 18.5244 22.3438C18.4941 22.3691 18.4525 22.4036 18.3994 22.4453C18.2925 22.5293 18.1386 22.6444 17.9404 22.7793C17.5441 23.0489 16.9656 23.4002 16.2129 23.749C14.7048 24.4479 12.4971 25.1367 9.66016 25.1367C6.82092 25.1367 4.61101 24.4478 3.05176 23.7568C2.27447 23.4124 1.66183 23.0685 1.22852 22.8203C1.00235 22.6908 0.853721 22.6045 0.740234 22.5449C0.688832 22.5179 0.666897 22.5077 0.665039 22.5068C0.667358 22.5078 0.687299 22.5161 0.719727 22.5244C0.749661 22.532 0.820747 22.5479 0.916992 22.5479V22.1719C0.403417 22.1299 8.39685e-05 21.7011 0 21.1768V4.78223C0 4.52837 0.0941371 4.29646 0.25 4.12012C0.863745 1.79514 4.84443 0 9.66602 0ZM2 20.959C2.07253 21.0006 2.14819 21.0423 2.22266 21.085C2.6368 21.3221 3.17957 21.6252 3.8623 21.9277C5.22386 22.5311 7.15669 23.1367 9.66016 23.1367C12.1654 23.1367 14.0865 22.5299 15.3711 21.9346C16.014 21.6366 16.4985 21.3416 16.8154 21.126C16.8643 21.0927 16.9073 21.0584 16.9482 21.0293C16.9281 20.9502 16.9161 20.8676 16.916 20.7822V7.81055C15.1735 8.83778 12.5727 9.49121 9.66602 9.49121C6.51816 9.49121 3.72856 8.72571 2 7.54785V20.959ZM9.66602 2C7.28591 2 5.22985 2.48593 3.84277 3.17871C2.33557 3.93165 2.16602 4.60215 2.16602 4.74609C2.16622 4.89059 2.33649 5.56002 3.84277 6.3125C5.22985 7.00533 7.28581 7.49121 9.66602 7.49121C12.0462 7.49121 14.1022 7.00533 15.4893 6.3125C16.2698 5.9226 16.6907 5.55434 16.916 5.27051V5.25C16.916 5.01071 16.9995 4.79028 17.1396 4.61816C17.0573 4.35549 16.7215 3.79429 15.4893 3.17871C14.1022 2.48593 12.0461 2 9.66602 2ZM13.0771 3.30566L13.1826 3.31641C13.4273 3.35273 13.6571 3.46984 13.8311 3.66016C14.0046 3.85017 14.0703 4.05532 14.0977 4.17188C14.1427 4.3644 14.1316 4.55965 14.1299 4.57617C14.1269 4.65436 14.1134 4.84042 14.0039 5.04297C13.8923 5.24923 13.7397 5.36503 13.6631 5.41699C13.4031 5.59312 13.1273 5.61708 12.9658 5.62695C12.7838 5.63805 12.51 5.6373 12.3096 5.62793C12.2195 5.6237 12.0777 5.61515 11.9443 5.58691C11.8896 5.57529 11.7371 5.54125 11.5781 5.44434C11.4094 5.34127 11.0109 5.00643 11.0928 4.42578L11.1484 4.03613L11.4541 3.78809C11.5525 3.70847 11.6645 3.63837 11.7812 3.5791C11.849 3.53471 11.9228 3.4964 12.0029 3.46875C12.1777 3.40846 12.5256 3.31143 12.9102 3.30371L13.0771 3.30566Z"
          fill="#139C57"
        />
      </svg>
    ),
    jerrycans: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="26"
        viewBox="0 0 23 26"
        fill="none"
      >
        <path
          d="M1 1.72852V24.7354"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1 24.7354H21.0296"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21.0293 9.30664V25.0055"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1.51221 1.22363H13.2736"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14.1006 1C14.1901 1.24623 14.2797 1.49247 15.1205 2.66022C15.9612 3.82796 17.5506 5.90976 18.526 7.12771C19.5015 8.34565 19.8149 8.63666 20.2056 8.93648"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16.8076 3.32026C16.8752 3.2157 17.0043 3.10485 17.3779 2.8873C17.6801 2.71129 18.2278 2.43158 18.517 2.28676C18.8061 2.14195 18.8245 2.14806 18.9102 2.25197C18.996 2.35588 19.1487 2.55742 19.2884 2.76812C19.4281 2.97882 19.5503 3.19257 19.6285 3.34543C19.7478 3.57868 19.8236 3.78182 19.9405 3.99113C20.1164 4.30621 20.2428 4.3992 20.3267 4.48285C20.3423 4.49832 20.3605 4.51061 20.1928 4.68179C20.0252 4.85298 19.671 5.18276 19.3847 5.42594C19.0984 5.66912 18.8907 5.81569 18.7746 5.8973C18.6401 5.99113 18.609 6.02204 18.5783 6.06507C18.5598 6.08977 18.5354 6.12031 18.4732 6.18878"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4.18604 5.2334V14.0381"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4.43359 5.26465H10.0929"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10.1519 5.38184V12.0433"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4.34717 14.2202C4.59523 13.7654 4.78503 13.4278 4.9479 13.2092C5.0394 13.0863 5.18656 12.9699 5.38848 12.8233C5.59039 12.6767 5.85223 12.5113 6.27652 12.3366C6.70081 12.1618 7.27962 11.9826 7.81896 11.8869C8.3583 11.7912 8.84064 11.7843 9.13735 11.7842C9.67816 11.8187 9.81743 11.8676 9.89041 11.8815C9.92204 11.8885 9.94271 11.8954 9.96401 11.9233"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    buckets: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="26"
        viewBox="0 0 20 26"
        fill="none"
      >
        <path
          d="M9.6665 1C12.1683 1 14.3839 1.50837 15.937 2.28418C17.5502 3.09006 18.1665 4.01886 18.1665 4.74609C18.1664 5.47329 17.55 6.40125 15.937 7.20703C14.3839 7.98289 12.1684 8.49121 9.6665 8.49121C7.16465 8.49121 4.94911 7.98289 3.396 7.20703C1.78301 6.40125 1.16665 5.47329 1.1665 4.74609C1.1665 4.01886 1.78281 3.09006 3.396 2.28418C4.9491 1.50837 7.16475 1 9.6665 1Z"
          stroke="#139C57"
          strokeWidth="2"
        />
        <path
          d="M1 4.78223V15.1038V21.1769"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17.9165 5.25V16.6531V20.7818"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M0.91748 21.5479C1.37703 21.5479 4.31748 24.1365 9.66034 24.1365C15.0032 24.1365 17.9175 21.5479 17.9175 21.5479"
          stroke="#139C57"
          strokeWidth="2"
        />
        <path
          d="M10.9448 8.68066C11.0308 10.4004 11.0966 11.3724 11.2044 11.6746C11.4088 12.2475 11.9832 13.1267 12.6877 14.0592C13.1942 14.7295 13.8939 15.2139 14.588 15.6695C15.2736 16.1197 15.8501 16.193 16.7282 16.2158C16.9367 16.1943 17.0657 16.1513 17.1751 16.1076C17.2846 16.064 17.3705 16.021 17.5243 15.9767"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1.77393 15.5459C2.59814 15.919 3.42236 16.292 4.24172 16.597C5.06107 16.902 5.85058 17.1276 6.28333 17.2481C6.71608 17.3686 6.76813 17.3773 6.82177 17.3863"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1.69824 11.7861C2.10275 12.0109 2.50726 12.2356 2.78306 12.3963C3.05886 12.557 3.19369 12.6469 3.46881 12.7395"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    bottles: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="24"
        viewBox="0 0 23 24"
        fill="none"
      >
        <path
          d="M6.11748 1.94141V5.52012C6.11748 5.52012 2.75188 6.82571 1.67077 8.0173C0.161963 9.68029 1.67004 10.8266 1.67004 10.8266L1.67059 20.0005C1.67069 21.6573 3.0138 23.0004 4.67059 23.0004H7.86592"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1.60645 12.3262C2.53489 12.3405 3.46333 12.3547 4.6201 12.3621C5.77686 12.3695 7.13382 12.3695 8.53189 12.3695"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8.53185 12.3701C8.54613 12.413 8.56042 12.4558 8.56778 13.0921C8.57513 13.7284 8.57513 14.9568 8.56799 15.6182C8.55774 16.5676 8.50328 17.0863 8.4455 17.4835C8.38771 17.7365 8.35871 17.9819 8.35157 18.1115C8.34443 18.1697 8.33015 18.2126 8.31543 18.3866"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M2.25586 18.3867H8.31563"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8.99434 1.94141V5.52012C8.99434 5.52012 12.3599 6.82571 13.441 8.0173C14.9499 9.68029 13.4418 10.8266 13.4418 10.8266L13.4412 20.0005C13.4411 21.6573 12.098 23.0004 10.4412 23.0004H7.2459"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <mask id="path-6-inside-1_932_3602" fill="white">
          <ellipse cx="7.55558" cy="1.85854" rx="3.09757" ry="1.85854" />
        </mask>
        <path
          d="M10.6532 1.85854H8.65316C8.65316 1.39325 8.95702 1.31368 8.71691 1.45775C8.51661 1.57793 8.11079 1.71709 7.55558 1.71709V3.71709V5.71709C8.71112 5.71709 9.85409 5.4402 10.7749 4.88772C11.6559 4.35913 12.6532 3.35029 12.6532 1.85854H10.6532ZM7.55558 3.71709V1.71709C7.00037 1.71709 6.59456 1.57793 6.39426 1.45775C6.15415 1.31368 6.45801 1.39325 6.45801 1.85854H4.45801H2.45801C2.45801 3.35029 3.45528 4.35913 4.33627 4.88772C5.25708 5.4402 6.40005 5.71709 7.55558 5.71709V3.71709ZM4.45801 1.85854H6.45801C6.45801 2.32384 6.15415 2.40341 6.39426 2.25934C6.59456 2.13916 7.00037 2 7.55558 2V0V-2C6.40005 -2 5.25708 -1.72311 4.33627 -1.17063C3.45528 -0.642036 2.45801 0.366803 2.45801 1.85854H4.45801ZM7.55558 0V2C8.11079 2 8.51661 2.13916 8.71691 2.25934C8.95702 2.40341 8.65316 2.32384 8.65316 1.85854H10.6532H12.6532C12.6532 0.366803 11.6559 -0.642036 10.7749 -1.17063C9.85409 -1.72311 8.71112 -2 7.55558 -2V0Z"
          fill="#139C57"
          mask="url(#path-6-inside-1_932_3602)"
        />
        <path
          d="M10.6486 1.65234C11.4308 1.65234 12.213 1.65234 13.548 1.65234C14.883 1.65234 16.747 1.65234 18.0568 1.72724C19.3665 1.80213 20.0656 1.95192 20.5172 2.1123C20.9688 2.27268 21.1519 2.43911 21.2629 2.59142C21.4512 2.84993 21.4414 3.19713 21.3998 3.56605C21.3561 3.95306 20.8896 4.29002 20.236 4.62541C19.887 4.8045 19.4825 4.96079 18.869 5.10478C18.2555 5.24876 17.44 5.36527 16.1544 5.41696C14.8689 5.46866 13.138 5.45201 12.0549 5.41847C10.9719 5.38494 10.5891 5.33501 10.342 5.29264C10.0948 5.25028 9.99497 5.21699 9.89209 5.1827"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21.5083 4.12793L21.5083 19.1279"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M13.27 21.2292C13.5462 21.2292 13.8224 21.2292 14.3066 21.2226C14.7908 21.216 15.4746 21.2029 15.9847 21.1764C16.4948 21.1499 16.8104 21.1104 17.3741 20.9783C17.9378 20.8462 18.7401 20.6226 19.3374 20.4285C19.9348 20.2345 20.303 20.0767 20.7223 19.9141"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    pet: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="30"
        viewBox="0 0 13 30"
        fill="none"
      >
        <path
          d="M5.13459 1V5.62127C5.13459 5.62127 2.41827 7.3072 1.54572 8.84592C0.327992 10.9934 1.54572 12.4737 1.54572 12.4737C1.54572 12.4737 3.73927 14.1559 3.54552 15.6983C3.38691 16.961 2.0954 17.8404 1.54572 19.326C0.835553 21.2454 0.946868 23.911 1.16698 25.8175C1.32837 27.2153 2.54736 28.1938 3.95447 28.1938H6.54572"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7.45672 1V5.62127C7.45672 5.62127 10.173 7.3072 11.0456 8.84592C12.2633 10.9934 11.0456 12.4737 11.0456 12.4737C11.0456 12.4737 8.85204 14.1559 9.04579 15.6983C9.2044 16.961 10.4959 17.8404 11.0456 19.326C11.7558 21.2454 11.6444 23.911 11.4243 25.8175C11.2629 27.2153 10.044 28.1938 8.63684 28.1938H6.04559"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="4.7959" y="0.0527344" width="3" height="4" fill="#139C57" />
        <path
          d="M2.54834 13.4834C3.71444 13.9592 4.35951 14.1285 5.11639 14.2052C5.62813 14.2571 6.40583 14.2516 7.0871 14.2214C7.76836 14.1912 8.33135 14.1151 8.7355 14.015C9.13964 13.915 9.36789 13.7933 9.60304 13.6678"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1.67139 19.4248C2.13421 19.5306 2.59703 19.6364 3.12638 19.7372C3.65572 19.8379 4.23755 19.9305 5.03317 19.9914C5.82878 20.0523 6.82055 20.0788 7.59593 20.0461C8.90025 19.9209 9.48489 19.7991 9.56483 19.7524C9.6051 19.7322 9.64478 19.7189 9.76579 19.6652"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    preforms: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="28"
        viewBox="0 0 10 28"
        fill="none"
      >
        <path
          d="M3 3.5L1 7V25C1 25 3.25352 27 5 27C6.74648 27 9 25 9 25V7L7 3.5"
          stroke="#139C57"
          strokeWidth="2"
        />
        <rect x="2" width="6" height="4" rx="1" fill="#139C57" />
      </svg>
    ),
    food: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="19"
        viewBox="0 0 30 19"
        fill="none"
      >
        <path
          d="M1.7832 9.94141H27.3594L22.8818 18H6.70801L1.7832 9.94141Z"
          fill="#F6F6EF"
          stroke="#139C57"
          strokeWidth="2"
        />
        <path
          d="M6.23633 3.23535H21.7871L19.2227 7.94141H9.05664L6.23633 3.23535Z"
          fill="#F6F6EF"
          stroke="#139C57"
          strokeWidth="2"
        />
        <rect
          x="2.11768"
          y="7.70605"
          width="24.8235"
          height="2.47059"
          rx="1.23529"
          stroke="#139C57"
          strokeWidth="2"
        />
        <rect
          x="5.4707"
          y="1"
          width="17"
          height="2.47059"
          rx="1.23529"
          stroke="#139C57"
          strokeWidth="2"
        />
      </svg>
    ),
    crates: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="26"
        viewBox="0 0 27 26"
        fill="none"
      >
        <path
          d="M1.51025 3.62891C1.51025 3.88133 1.51025 4.13375 1.55232 7.50317C1.59439 10.8726 1.67853 17.3514 1.76522 24.0265"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1.76514 24.0264H22.1627"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22.1626 4.13867V23.7713"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1 4.64941H23.1823"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22.1636 5.05406L25.3583 1.85938"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1.59766 4.1554C2.22362 3.75906 4.02162 2.82761 5.17121 1.96205C5.39035 1.79333 5.48918 1.72744 5.62246 1.6276C5.75574 1.52777 5.92047 1.39599 6.28985 1.06055"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22.4458 23.882C23.3364 22.9913 24.227 22.1007 24.7106 21.6254C25.1941 21.1502 25.2436 21.1172 25.3445 21.0332"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M25.3618 2.47852V21.0043"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6.06299 1H24.6695"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M2.27393 12.4657C2.46168 12.3316 2.64944 12.1975 3.3899 11.4579C4.13036 10.7182 5.41783 9.37709 6.38953 8.32411C7.36123 7.27113 7.97814 6.54693 8.61375 5.80078"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M3.33057 23.0316C6.36149 20.1617 9.39241 17.2917 11.8658 15.0085C14.3391 12.7254 16.163 11.116 17.2233 10.0992C19.0526 8.34493 19.1785 7.61775 19.7873 6.96792C20.0449 6.67002 20.1823 6.45138 20.2498 6.28923C20.2904 6.20754 20.3441 6.12708 20.4806 5.96289"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15.6992 23.6996C16.3077 22.9897 16.9163 22.2797 17.7115 21.4576C18.5067 20.6355 19.4702 19.7227 20.0172 19.1764C20.5643 18.6302 20.6657 18.478 20.7702 18.3213"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    molding: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          d="M16.7563 1.01758V2.63858C16.7563 2.63858 18.3545 3.82295 18.9722 5.07009C19.8343 6.8106 19.297 10.317 19.297 10.317C19.297 10.317 17.7441 11.6804 17.8813 12.9306C17.9936 13.954 19.2969 14.587 19.297 15.8709C19.2971 16.9942 19.2971 18.2928 19.2971 19.4746C19.2971 21.4256 16.5227 23.076 16.5227 23.076"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M23.7251 23.5254H16.5224"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24.0005 1.54492V22.8432"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M23.7251 1.01758L16.5224 1.01758"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M11.5647 2.2041L10.5684 4.20034V14.4667C10.5684 14.4667 11.691 15.6074 12.5611 15.6074C13.4312 15.6074 14.5538 14.4667 14.5538 14.4667V4.20034L13.5575 2.2041"
          stroke="#139C57"
          strokeWidth="2"
        />
        <rect
          x="10.2788"
          y="0.0996094"
          width="4.50171"
          height="2.70103"
          rx="1"
          fill="#139C57"
        />
        <path
          d="M8.24419 1V2.621C8.24419 2.621 6.64603 3.80537 6.02832 5.05251C5.16624 6.79302 5.70347 10.2994 5.70347 10.2994C5.70347 10.2994 7.25638 11.6628 7.11921 12.913C7.00693 13.9364 5.70359 14.5694 5.70347 15.8533C5.70337 16.9766 5.70335 18.2752 5.70336 19.457C5.70337 21.408 8.47783 23.0584 8.47783 23.0584"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1.27539 23.5078H8.47813"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1 1.52734V22.8257"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1.27539 1L8.47813 0.999999"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16.812 1.22949H23.1721"
          stroke="#139C57"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  };

  return icons[type] || icons.drums;
};

const ProductCategory = ({ icon, name, productCount, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`flex md:flex-row flex-col items-center md:items-center gap-2 md:gap-3 p-2 md:p-3 cursor-pointer transition-all rounded-lg min-w-[100px] md:min-w-0 ${
      isActive
        ? "bg-primary/10 md:border-l-4 border-primary"
        : "hover:bg-gray-50"
    }`}
  >
    <div
      className={`flex-shrink-0 ${isActive ? "text-primary" : "text-gray-600"}`}
    >
      <CategoryIcon type={icon} />
    </div>
    <div className="flex-1 min-w-0 text-center md:text-left">
      <h3
        className={`text-[11px] md:text-[14px] font-[600] ${
          isActive ? "text-primary" : "text-[#183F34]"
        } truncate`}
      >
        {name}
      </h3>
      <p
        className={`text-[10px] md:text-[12px] ${
          isActive ? "text-primary" : "text-[#5D6865]"
        } hidden md:block`}
      >
        {productCount} Products
      </p>
    </div>
  </div>
);

const ProductsMegaMenu = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const currentCategory = ProductWithCategories[activeCategory];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose}>
      <div className="absolute top-2 right-3 border border-gray-300 bg-secondary rounded-lg cursor-pointer">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        </div>
      </div>

      {/* Mega Menu */}
      <div
        className="fixed top-[70px] md:top-[80px] left-0 right-0 bg-[#F6F6EF] shadow-2xl z-50 max-w-[1200px] mx-2 md:mx-4 lg:mx-auto border border-[#DFDFD3] rounded-[5px] transition-all duration-300 ease-out"
        style={{
          animation: isOpen ? "slideDown 0.3s ease-out" : "none",
          transformOrigin: "bottom",
          maxHeight: "calc(100vh - 80px)",
        }}
      >
        <div className="flex flex-col md:grid md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr] h-full max-h-[calc(100vh-100px)] overflow-hidden">
          {/* Left Sidebar - Scrollable Categories */}
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-[#DFDFD3] md:max-h-[calc(100vh-100px)]">
            {/* Scrollable Content */}
            <div className="p-2 md:p-4 overflow-x-auto md:overflow-x-visible overflow-y-visible md:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 flex-1 md:max-h-full">
              <div className="flex md:flex-col gap-2 min-w-max md:min-w-0">
                {ProductWithCategories.map((category, index) => (
                  <ProductCategory
                    key={category.id}
                    icon={category.icon}
                    name={category.name}
                    productCount={category.productCount}
                    isActive={activeCategory === index}
                    onClick={() => setActiveCategory(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="p-3 md:p-4 pb-8">
              {/* Header with Image */}
              <Link
                key={currentCategory.id}
                href={`/${currentCategory.slug}`}
                onClick={onClose}
                className="block"
              >
                <div className="relative flex items-center justify-between mb-4 md:mb-6 bg-[#FFFFFF] rounded-xl md:rounded-2xl overflow-hidden min-h-[80px] md:min-h-[100px] hover:shadow-lg transition-shadow">
                  <div className="flex-1 min-w-0 p-4 md:p-6 z-10">
                    <h2 className="text-[18px] md:text-[24px] lg:text-[28px] font-[700] text-[#183F34] mb-2 md:mb-3 leading-tight">
                      {currentCategory.name}
                    </h2>
                    <p className="text-[12px] md:text-[14px] text-[#687975] mb-2 md:mb-4 max-w-[200px] md:max-w-[250px] lg:max-w-[400px] line-clamp-2 md:line-clamp-none">
                      {currentCategory.description}
                    </p>
                    <span className="text-primary font-[600] text-[12px] md:text-[14px] hover:underline">
                      Know More
                    </span>
                  </div>

                  {/* Rounded background with image */}
                  <div className="absolute right-0 top-0 bottom-0 w-[30%] md:w-[25%] bg-[#D1EEAE] rounded-l-full flex items-center justify-center">
                    <div className="relative w-[80px] h-[80px] md:w-[140px] md:h-[100px] lg:w-[180px] lg:h-[120px]">
                      <Image
                        src={currentCategory.image}
                        alt={currentCategory.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Product Sections */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4">
                {currentCategory.sections.map((section, idx) => {
                  // When the category has `skipSectionSlug: true` in data,
                  // the section is a label only — skip the middle URL segment.
                  const sectionHref = currentCategory.skipSectionSlug
                    ? `/${currentCategory.slug}`
                    : `/${currentCategory.slug}/${section.slug}`;

                  return (
                    <div key={idx} className="min-w-0">
                      <Link href={sectionHref} onClick={onClose}>
                        <h3 className="text-[15px] md:text-[17px] font-[500] text-primary mb-2 md:mb-3 hover:underline">
                          {section.title}
                        </h3>
                      </Link>
                      <ul className="space-y-1.5 md:space-y-2">
                        {section.products.map((product, productIdx) => {
                          // A product can carry its own `href` when its real
                          // page lives outside this section's URL segment
                          // (e.g. grouped here for merchandising only).
                          const productHref = product.href || (currentCategory.skipSectionSlug
                            ? `/${currentCategory.slug}/${product.slug}`
                            : `/${currentCategory.slug}/${section.slug}/${product.slug}`);
                          return (
                            <li key={productIdx}>
                              <Link
                                href={productHref}
                                onClick={onClose}
                                className="text-[12px] md:text-[13px] font-[400] text-[#5D6865] hover:text-primary transition-colors block truncate"
                              >
                                {product.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsMegaMenu;
