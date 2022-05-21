

import * as React from "react";

const Logo = ({className, color}) => {
    const classList = ["logo"];

    if (className) {
        classList.push(className);
    }

    if (color) {
        classList.push("logo--" + color);
    }

    return (
        <svg className={classList.join(" ")} width="95" height="15" viewBox="0 0 95 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.14872 11.7135H9.3021V14.312H0.273682V0.256592H3.14872V11.7135Z" fill="white"/>
            <path d="M29.8335 8.49562C29.8335 9.43187 29.6808 10.2788 29.3755 11.0307C29.0701 11.7826 28.6524 12.4221 28.1195 12.9464C27.5865 13.4708 26.9585 13.8741 26.2354 14.1506C25.5123 14.4272 24.723 14.5655 23.8703 14.5655C23.0176 14.5655 22.2253 14.4272 21.4965 14.1506C20.7648 13.8741 20.1339 13.4736 19.6009 12.9464C19.068 12.4221 18.6532 11.7826 18.3564 11.0307C18.0597 10.2788 17.9099 9.43476 17.9099 8.49562V0.253662H20.7849V8.7088C20.7849 9.2331 20.8627 9.69691 21.0183 10.0945C21.1739 10.492 21.3899 10.8262 21.6665 11.0941C21.943 11.3649 22.2686 11.5665 22.6459 11.7019C23.0233 11.8373 23.4295 11.9036 23.8703 11.9036C24.311 11.9036 24.7172 11.8373 25.0946 11.7019C25.472 11.5665 25.7975 11.3649 26.0741 11.0941C26.3506 10.8233 26.5667 10.492 26.7223 10.0945C26.8778 9.69691 26.9556 9.23598 26.9556 8.7088V0.253662H29.8306V8.49562H29.8335Z" fill="white"/>
            <path d="M46.4671 0C47.7318 0 48.8639 0.265032 49.8636 0.797979C50.8632 1.33093 51.7044 2.07993 52.3872 3.045L50.3418 4.72739C49.8578 4.07345 49.3018 3.56642 48.6709 3.20344C48.04 2.84046 47.291 2.65898 46.4239 2.65898C45.7412 2.65898 45.1247 2.77133 44.5716 2.99891C44.0184 3.22649 43.5431 3.54626 43.1456 3.95821C42.748 4.37016 42.4426 4.8599 42.2295 5.42742C42.0163 5.99493 41.9097 6.61431 41.9097 7.27977C41.9097 7.96252 42.0192 8.59054 42.241 9.16382C42.4599 9.73997 42.7768 10.2355 43.1888 10.6532C43.6007 11.0709 44.0905 11.3993 44.658 11.6327C45.2255 11.866 45.865 11.9841 46.5737 11.9841C47.412 11.9841 48.1409 11.8285 48.766 11.5145C49.3911 11.2034 49.901 10.7771 50.2986 10.2355V9.08603H46.4239V6.59414H53.1765V10.7483C52.8654 11.3014 52.4793 11.8141 52.0271 12.2808C51.5719 12.7504 51.0591 13.1508 50.4829 13.485C49.9068 13.8192 49.2817 14.0813 48.6075 14.2743C47.9334 14.4674 47.219 14.5624 46.4671 14.5624C45.4012 14.5624 44.4131 14.3781 43.497 14.0093C42.5809 13.6406 41.7858 13.1278 41.1117 12.4767C40.4376 11.8228 39.9075 11.0536 39.5244 10.1663C39.1413 9.27904 38.9482 8.31686 38.9482 7.27977C38.9482 6.24268 39.1413 5.2805 39.5244 4.39321C39.9075 3.50593 40.4376 2.73676 41.1117 2.08282C41.7858 1.42888 42.5809 0.918973 43.497 0.550231C44.4102 0.18437 45.4012 0 46.4671 0Z" fill="white"/>
            <path d="M74.4283 14.3118H71.3401L70.5508 12.4796H64.8007L64.0114 14.3118H60.926L67.209 0H68.1453L74.4283 14.3118ZM65.8032 10.1145H69.531L67.6786 5.36404L65.8032 10.1145Z" fill="white"/>
            <path d="M88.4635 0.256542C89.201 0.256542 89.8809 0.363131 90.4974 0.57631C91.1138 0.789489 91.6468 1.09485 92.0933 1.4924C92.5398 1.88995 92.8884 2.36816 93.1362 2.92992C93.3839 3.49167 93.5078 4.11104 93.5078 4.79379C93.5078 5.71565 93.2888 6.52227 92.8481 7.21078C92.4073 7.89929 91.8052 8.42936 91.0389 8.7981L95 14.3148H91.762L88.1236 9.34833H86.0379V14.3091H83.1628V0.253662H88.4635V0.256542ZM86.035 2.78876V6.81323H88.4405C89.1232 6.81323 89.6475 6.62886 90.0163 6.26012C90.385 5.89138 90.5694 5.40164 90.5694 4.79092C90.5694 4.19459 90.385 3.7135 90.0163 3.34187C89.6475 2.97313 89.1232 2.78876 88.4405 2.78876H86.035Z" fill="white"/>
        </svg>
    );
};

export default Logo;