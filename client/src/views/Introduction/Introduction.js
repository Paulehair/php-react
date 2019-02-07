import React from 'react';

const Introduction = ({ changeCurrentStep, slug, animation, indexToGo }) => {

    return (
        <div className="page">
            <div className={"introduction"}>
                <div className={"introduction-content"}>
                    <ul className={"introduction-title"}>
                        <li className={"introduction-title-letter mirror"}>E</li>
                        <li className={"introduction-title-letter ghost"}>V</li>
                        <li className={"introduction-title-letter ghost"}>O</li>
                        <li className={"introduction-title-letter ghost"}>L</li>
                        <li className={"introduction-title-letter ghost"}>V</li>
                        <li className={"introduction-title-letter"}>E</li>
                    </ul>
                    <svg onClick={() => changeCurrentStep()} className={"introduction-svg"} viewBox="0 0 91.87 64.21" height="120px" fill="#fff">
                        <title>fingerprint</title>
                        <g>
                            <path className={animation ? "cls-1 showDash" : "cls-1"} strokeDasharray="61" strokeDashoffset="61" d="M238.91,243.65a.36.36,0,0,1-.22-.07.37.37,0,0,1-.09-.52,20.25,20.25,0,0,1,26.31-6.39.38.38,0,0,1-.36.66,19.5,19.5,0,0,0-25.34,6.16A.38.38,0,0,1,238.91,243.65Z" transform="translate(-204.34 -217.68)" />
                            <path className={animation ? "cls-1 showDash" : "cls-1"} strokeDasharray="28" strokeDashoffset="28" d="M274,248a.38.38,0,0,1-.35-.24,19.85,19.85,0,0,0-7.62-9.5.37.37,0,1,1,.42-.62,20.55,20.55,0,0,1,7.9,9.85.38.38,0,0,1-.22.49Z" transform="translate(-204.34 -217.68)" />
                            <path className={animation ? "cls-1 showDash" : "cls-1"} strokeDasharray="51" strokeDashoffset="51" d="M245.77,274.44a.35.35,0,0,1-.29-.15,32.17,32.17,0,0,1-6.83-19.71,16.92,16.92,0,0,1,.32-3.26.38.38,0,1,1,.74.15,15.33,15.33,0,0,0-.31,3.11,31.51,31.51,0,0,0,6.67,19.26.36.36,0,0,1-.07.52A.34.34,0,0,1,245.77,274.44Z" transform="translate(-204.34 -217.68)" />
                            <path className={animation ? "cls-1 showDash" : "cls-1"} strokeDasharray="41" strokeDashoffset="41" d="M239.85,249.83a.25.25,0,0,1-.12,0,.36.36,0,0,1-.23-.47,16.61,16.61,0,0,1,14.7-11.41.37.37,0,0,1,.4.35.37.37,0,0,1-.35.4,15.88,15.88,0,0,0-14,10.9A.39.39,0,0,1,239.85,249.83Z" transform="translate(-204.34 -217.68)" />
                            <path className={animation ? "cls-1 showDash" : "cls-1"} strokeDasharray="55" strokeDashoffset="55" d="M274.91,253.34h0a14,14,0,0,1-3.54-.75.37.37,0,0,1-.25-.3A15.94,15.94,0,0,0,256,238.66a.38.38,0,0,1-.36-.39.37.37,0,0,1,.39-.36A16.69,16.69,0,0,1,271.82,252a13,13,0,0,0,3.11.63.37.37,0,0,1,.36.39A.38.38,0,0,1,274.91,253.34Z" transform="translate(-204.34 -217.68)" />
                            <path className={animation ? "cls-1 showDash" : "cls-1"} strokeDasharray="149" strokeDashoffset="149" d="M253.71,277.51a.36.36,0,0,1-.24-.09,29.56,29.56,0,0,1-11.17-22.84,13,13,0,0,1,26.08-.26c.66.67,4.05,1.84,6.52,1.92a.36.36,0,0,1,.36.38.35.35,0,0,1-.38.37c-2.59-.08-6.48-1.33-7.18-2.31a.4.4,0,0,1-.07-.21,12.29,12.29,0,0,0-24.58.11A28.8,28.8,0,0,0,254,276.84a.38.38,0,0,1,.05.53A.37.37,0,0,1,253.71,277.51Z" transform="translate(-204.34 -217.68)" />
                            <path className={animation ? "cls-1 showDash" : "cls-1"} strokeDasharray="9" strokeDashoffset="9" d="M274.36,260.6h0a21.8,21.8,0,0,1-3.3-.52.37.37,0,1,1,.17-.73,23.23,23.23,0,0,0,3.18.51.37.37,0,0,1,0,.74Z" transform="translate(-204.34 -217.68)" />
                            <path className={animation ? "cls-1 showDash" : "cls-1"} strokeDasharray="63" strokeDashoffset="63" d="M268.7,259.36a.35.35,0,0,1-.14,0c-3-1.13-4.57-2.78-4.57-4.75a8.65,8.65,0,0,0-16.25-4.12.38.38,0,0,1-.66-.36,9.4,9.4,0,0,1,17.66,4.48c0,2.07,2.22,3.34,4.09,4a.39.39,0,0,1,.22.49A.38.38,0,0,1,268.7,259.36Z" transform="translate(-204.34 -217.68)" />
                            <path className={animation ? "cls-1 showDash" : "cls-1"} strokeDasharray="60" strokeDashoffset="60" d="M259.51,277.17a.41.41,0,0,1-.19-.05,26.33,26.33,0,0,1-13.38-22.54,9.89,9.89,0,0,1,.17-1.8.38.38,0,0,1,.74.14,8.49,8.49,0,0,0-.16,1.66,25.55,25.55,0,0,0,13,21.89.36.36,0,0,1,.13.51A.37.37,0,0,1,259.51,277.17Z" transform="translate(-204.34 -217.68)" />
                            <path className={animation ? "cls-1 showDash" : "cls-1"} strokeDasharray="52" strokeDashoffset="52" d="M273.3,264.16h0c-6.24-.69-12.92-3.58-12.92-9.58a5,5,0,0,0-4.13-4.93.37.37,0,1,1,.12-.73,5.73,5.73,0,0,1,4.76,5.66c0,7.11,10.21,8.61,12.25,8.84a.37.37,0,0,1,.34.41A.39.39,0,0,1,273.3,264.16Z" transform="translate(-204.34 -217.68)" />
                            <path className={animation ? "cls-1 showDash" : "cls-1"} strokeDasharray="69" strokeDashoffset="69" d="M264,275.38l-.14,0c-7.13-2.84-14.31-10.36-14.31-20.78a5.74,5.74,0,0,1,4-5.48.38.38,0,0,1,.48.24.38.38,0,0,1-.25.47,5,5,0,0,0-3.48,4.77c0,10.07,7,17.34,13.83,20.08a.36.36,0,0,1,.21.49A.37.37,0,0,1,264,275.38Z" transform="translate(-204.34 -217.68)" />
                            <path className={animation ? "cls-1 showDash" : "cls-1"} strokeDasharray="65" strokeDashoffset="65" d="M267.66,272.71h-.09a19,19,0,0,1-14.34-18.12,2.11,2.11,0,1,1,4.22,0,11.6,11.6,0,0,0,.11,1.57.38.38,0,0,1-.32.42.37.37,0,0,1-.42-.32,11.42,11.42,0,0,1-.12-1.67,1.36,1.36,0,1,0-2.72,0A18.19,18.19,0,0,0,267.74,272a.37.37,0,0,1,.28.45A.37.37,0,0,1,267.66,272.71Z" transform="translate(-204.34 -217.68)" />
                            <path className={animation ? "cls-1 showDash" : "cls-1"} strokeDasharray="37" strokeDashoffset="37" d="M271.65,267.66h0c-2.63-.39-11.43-2.18-14.14-8.95a.38.38,0,0,1,.7-.28c2.56,6.4,11,8.12,13.55,8.49a.38.38,0,0,1,.31.43A.37.37,0,0,1,271.65,267.66Z" transform="translate(-204.34 -217.68)" />
                        </g>
                        <path d="M255.24,281.88a27.48,27.48,0,1,1,27.48-27.47A27.51,27.51,0,0,1,255.24,281.88Zm0-54.7a27.23,27.23,0,1,0,27.23,27.23A27.26,27.26,0,0,0,255.24,227.18Z" transform="translate(-204.34 -217.68)" />
                        <path d="M268.26,230.47a.12.12,0,0,1-.09,0,.14.14,0,0,1,0-.17L279.4,219a.12.12,0,0,1,.09,0h5.29a.13.13,0,0,1,.13.13.12.12,0,0,1-.13.12h-5.24l-11.19,11.19A.11.11,0,0,1,268.26,230.47Z" transform="translate(-204.34 -217.68)" />
                        <path d="M233.56,237.86a.13.13,0,0,1-.09,0l-7.06-7.06h-8.07a.12.12,0,0,1-.12-.12.12.12,0,0,1,.12-.13h8.13a.12.12,0,0,1,.08,0l7.1,7.09a.14.14,0,0,1,0,.18A.12.12,0,0,1,233.56,237.86Z" transform="translate(-204.34 -217.68)" />
                        <path d="M223.37,278.47H207.09a.12.12,0,0,1-.12-.13.12.12,0,0,1,.12-.12h16.23l8.93-8.94a.13.13,0,0,1,.18.18l-9,9A.12.12,0,0,1,223.37,278.47Z" transform="translate(-204.34 -217.68)" />
                        <path d="M293.41,279.88H278.5l-.09,0-5-5a.13.13,0,0,1,0-.18.15.15,0,0,1,.18,0l4.95,5h14.86a.13.13,0,0,1,.12.13A.12.12,0,0,1,293.41,279.88Z" transform="translate(-204.34 -217.68)" />
                        <path d="M286.09,220.55a1.44,1.44,0,1,1,1.44-1.43A1.43,1.43,0,0,1,286.09,220.55Zm0-2.62a1.19,1.19,0,1,0,1.19,1.19A1.18,1.18,0,0,0,286.09,217.93Z" transform="translate(-204.34 -217.68)" />
                        <path d="M217,232.08a1.44,1.44,0,1,1,1.44-1.44A1.45,1.45,0,0,1,217,232.08Zm0-2.63a1.19,1.19,0,1,0,1.19,1.19A1.19,1.19,0,0,0,217,229.45Z" transform="translate(-204.34 -217.68)" />
                        <path d="M205.78,279.78a1.44,1.44,0,1,1,1.44-1.44A1.44,1.44,0,0,1,205.78,279.78Zm0-2.62a1.19,1.19,0,1,0,1.19,1.18A1.18,1.18,0,0,0,205.78,277.16Z" transform="translate(-204.34 -217.68)" />
                        <path d="M294.78,281.19a1.44,1.44,0,1,1,1.44-1.43A1.44,1.44,0,0,1,294.78,281.19Zm0-2.62a1.19,1.19,0,1,0,1.19,1.19A1.19,1.19,0,0,0,294.78,278.57Z" transform="translate(-204.34 -217.68)" />
                    </svg>
                    <p className={"introduction-click"}>Click here</p>
                </div>
                <input ref={indexToGo} type="hidden" defaultValue={0} />
                <input ref={slug} type="hidden" defaultValue={'endpage'} />
            </div>
        </div>
    );
};

export default Introduction;