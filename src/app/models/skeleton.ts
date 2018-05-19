export class Skeleton {
    partId: number;
    name: string ;
    coords: string;
    shape: string;
    link: string;
    color: string;
}

export const skeletonData: Skeleton[] = [
    {
        partId: 1,
        name: 'Cranial/Neuro',
        coords:"257.6460266113281 57.29343795776367 264.1836853027344 54.678382873535156 273.33636474609375 55.98590850830078 279.22021484375 59.581607818603516 287.06536865234375 55.00526428222656 291.6417236328125 54.678382873535156 299.1600036621094 56.966556549072266 306.0245056152344 61.54289627075195 310.6008605957031 63.177303314208984 315.50408935546875 57.62031936645508 314.5234375 48.79451370239258 312.8890380859375 38.33430480957031 308.9664306640625 30.489147186279297 304.063232421875 24.60527992248535 297.85247802734375 20.682701110839844 289.02667236328125 17.41388511657715 281.1815185546875 17.087003707885742 271.0481872558594 17.740766525268555 261.8955078125 20.355819702148438 253.7234649658203 25.912805557250977 248.4933624267578 33.43108367919922 245.55142211914062 42.910648345947266 243.5901336669922 53.043975830078125 251.10841369628906 63.8310661315918 257.6460266113281 57.29343795776367",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 2,
        name: 'MidFace',
        coords: "278.56646728515625 68.73426818847656 285.1040954589844 74.6181411743164 293.276123046875 77.23319244384766 302.7557067871094 72.98373413085938 308.6395568847656 70.04179382324219 311.5815124511719 70.3686752319336 311.5815124511719 74.94502258300781 309.6202087402344 84.75146484375 307.0051574707031 90.30845642089844 300.7944030761719 91.28910064697266 294.25677490234375 92.59662628173828 289.3535461425781 94.23103332519531 277.9126892089844 96.51920318603516 264.51055908203125 92.59662628173828 257.31915283203125 91.28910064697266 251.76217651367188 90.30845642089844 247.839599609375 82.46329498291016 246.5320587158203 75.59878540039062 246.20518493652344 69.71491241455078 251.76217651367188 68.73426818847656 258.2998046875 76.90631103515625 267.1256103515625 79.5213623046875 272.6825866699219 74.6181411743164 278.56646728515625 68.73426818847656",
        shape: "poly",
        link: "#",
        color: 'red'    
    },
    {
        partId: 3,
        name: 'Mandibel/Orthognthoics',
        coords: "253.7234649658203 94.88479614257812 258.6266784667969 94.23103332519531 264.51055908203125 99.1342544555664 271.7019348144531 103.71060180664062 279.8739929199219 104.03748321533203 288.0460205078125 102.7299575805664 293.9299011230469 96.84608459472656 303.4094543457031 94.55791473388672 304.71697998046875 99.78801727294922 302.7557067871094 107.6331787109375 296.871826171875 112.20951843261719 296.871826171875 112.20951843261719 290.334228515625 117.7665023803711 290.00732421875 117.11273956298828 289.680419921875 116.45897674560547 282.16217041015625 121.03532409667969 282.16217041015625 121.03532409667969 274.97076416015625 121.3622055053711 266.14495849609375 117.11273956298828 259.28045654296875 110.90199279785156 253.0697021484375 104.36436462402344 253.7234649658203 94.88479614257812",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 3,
        name: 'Left Clavicle',
        coords: "219.728 155.685 231.496 161.896 250.128 171.702 272.356 175.625 272.356 175.625 281.835 184.123 272.356 182.162 262.876 180.201 262.876 180.201 262.876 180.201 250.128 178.566 250.128 178.419 234.437 169.733 234.437 172.683 228.88 168.106 222.343 162.876 220.362 163.536 219.311 155.824 219.728 155.685",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 3,
        name: 'Right Clavicle',
        coords: "290.334 174.971 302.102 173.99 315.831 169.414 324.984 164.184 334.463 157.319 345.904 154.704 350.154 156.012 347.538 160.588 339.366 161.242 334.463 164.511 326.945 170.394 314.197 176.605 303.083 179.547 291.642 180.855 290.334 174.971",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 4,
        name: 'Left Proximal Humerus',
        coords: "199.788 154.377 198.807 160.915 198.578 161.374 195.914 169.643 196.519 168.433 203.057 178.24 209.921 171.702 214.171 162.549 218.42 161.896 219.728 156.012 219.728 156.012 223.323 154.377 216.132 153.723 208.941 153.07 208.941 153.07 208.941 153.07 199.788 154.377",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 4,
        name: 'Right Proximal Humerus',
        coords: "199.788 154.377 198.807 160.915 198.578 161.374 195.914 169.643 196.519 168.433 203.057 178.24 209.921 171.702 214.171 162.549 218.42 161.896 219.728 156.012 219.728 156.012 223.323 154.377 216.132 153.723 208.941 153.07 208.941 153.07 208.941 153.07 199.788 154.377",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 5,
        name: 'Left Humeral Shaft',
        coords: "136.373 263.229 146.506 274.997 151.41 278.592 155.659 262.575 159.582 251.461 170.369 232.829 184.098 211.255 195.865 192.622 203.057 179.22 194.885 170.394 188.674 184.45 178.541 202.429 171.349 214.523 160.889 233.156 149.448 248.192 136.373 263.229",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 5,
        name: 'Right Humeral Shaft',
        coords: "414.222 277.612 423.048 275.65 436.123 274.997 425.336 262.248 417.164 252.442 410.953 243.943 410.953 243.943 404.089 233.156 403.762 232.829 403.435 232.502 394.936 218.446 394.936 218.446 382.842 194.911 376.631 179.547 376.631 179.547 372.055 178.24 368.786 180.528 365.517 182.816 365.19 182.816 365.19 182.816 370.42 190.988 375.323 200.468 380.88 210.274 386.764 220.08 391.994 231.194 401.147 244.597 408.665 258.652 411.934 267.151 414.222 277.612",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 8,
        name: 'Left Distal Humerus',
        coords: "",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 8,
        name: 'Right Distal Humerus',
        coords: "",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 9,
        name: 'Proximal Ulna',
        coords: "",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 10,
        name: 'Proximal Radius',
        coords: "",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 11,
        name: 'Left Radius/ Ulna Shaft',
        coords: "60.8633 362.928 72.3042 353.121 86.0332 338.738 95.8397 325.009 110.876 305.397 119.702 291.994 123.951 285.457 133.104 294.609 125.586 301.474 107.934 319.779 91.9171 340.373 75.573 357.371 70.6698 366.85 65.7666 368.812 60.8633 362.928",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 11,
        name: 'Right Radius/ Ulna Shaft',
        coords: "485.156 365.216 493.001 362.601 485.156 356.063 475.676 342.988 464.889 328.278 445.276 291.341 437.431 293.956 432.528 297.551 439.392 307.031 447.891 319.452 458.351 333.181 467.504 346.91 476.003 356.063 485.156 365.216",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 12,
        name: 'Distal Radius',
        coords: "",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Left Hand',
        coords: "39.2892 450.532 37.9816 440.072 37.9816 424.708 40.9236 408.364 45.173 393.655 52.0375 378.291 58.902 383.521 66.0934 376.657 63.8053 385.809 63.4784 400.192 61.1902 405.749 63.1515 414.248 58.902 423.074 58.2483 413.267 58.2483 385.156 54.3257 390.059 51.3838 402.153 52.0375 407.384 49.0956 410.652 48.4418 417.19 46.1537 420.459 43.5386 426.343 43.5386 426.343 43.5386 427.323 43.5386 430.265 43.5386 433.207 42.2311 438.11 42.2311 438.11 41.5773 448.571",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Right Hand',
        coords: "487.771 375.349 487.444 384.829 487.444 395.616 489.732 404.442 491.039 412.614 494.308 422.093 498.558 417.844 497.25 407.384 493.981 406.403 494.308 401.173 494.635 396.27 493.655 390.386 493.655 383.521 498.558 390.059 499.865 398.231 501.173 402.807 505.095 409.999 507.384 416.209 507.057 431.573 507.057 431.573 507.057 438.11 509.018 435.822 510.979 433.534 513.594 435.495 513.594 435.495 513.267 443.014 514.902 450.859 517.844 454.781 519.151 446.936 519.151 436.149 517.844 426.016 516.536 417.19 513.921 407.71 511.306 398.558 507.057 389.078 504.115 383.194 504.115 379.272 501.827 376.984 496.923 382.214 490.386 376.33 487.771 375.349",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'C Spine',
        coords: "272.683 156.665 272.356 151.435 272.356 163.53 273.009 172.029 273.336 179.22 274.644 184.45 283.47 186.739 290.007 184.123 288.046 180.201 288.046 180.201 287.392 171.375 288.046 172.683 288.7 173.99 289.68 164.511 289.68 164.511 289.027 156.992 286.412 149.147 287.065 144.244 286.085 141.302 288.046 136.726 287.392 134.764 286.085 132.149 287.719 129.534 286.085 125.612 286.085 125.612 284.45 117.44 287.392 120.055 290.334 122.67 282.816 124.631 282.816 124.631 277.259 124.304 272.356 124.304 271.375 129.534",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'T Spine',
        coords: "270.394 321.414 277.913 325.336 289.68 323.375 288.7 316.837 294.911 318.799 294.911 318.799 298.179 317.818 296.545 315.53 294.911 313.242 289.68 312.915 289.68 312.915 290.661 307.031 289.68 299.513 289.68 299.513 291.969 302.128 290.988 294.609 290.007 287.091 290.007 287.091 290.007 287.091 290.007 287.091 294.584 286.437 292.295 283.822 290.007 281.207 290.007 281.207 290.007 281.207 290.334 274.016 289.027 263.556 290.334 255.057 296.545 251.461 295.564 247.212 291.642 245.25 289.354 242.308 291.969 237.405 291.969 237.405 299.814 237.405 297.199 232.502 294.584 227.599 294.584 227.599 294.584 227.599 290.661 226.618 289.027 222.042 288.7 212.562 288.7 207.005 287.719 197.526 291.315 190.661 289.68 187.719 283.47 188.373 277.259 188.373 277.259 188.373 273.663 186.085 273.009 187.065 272.356 188.046 268.76 188.373 268.76 188.373 269.087 196.218 273.009 201.448 271.048 210.274 272.029 225.964 265.818 230.541 270.394 235.771 272.356 242.635 266.799 244.597 263.857 250.154 268.433 253.095 272.029 257.672 269.414 261.921 270.721 275.65 264.837 283.169 270.721 286.111 270.394 291.994 269.741 295.917 270.721 298.532 269.741 305.723 270.394 313.895 270.394 313.895 267.126 311.28 264.837 314.876 262.549 318.472 262.549 318.472 262.549 318.472 267.779 319.452 270.394 321.414",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'L Spine',
        coords: "269.741 325.663 278.893 328.605 289.027 326.317 292.622 329.259 297.852 330.24 296.218 333.181 292.295 333.508 290.661 336.777 291.642 341.027 296.872 343.642 295.564 349.199 291.315 349.852 292.295 353.448 293.276 358.351 301.775 359.005 301.775 359.005 299.814 361.62 295.891 363.908 291.969 366.197 291.969 366.197 291.969 366.197 295.891 369.138 297.526 374.042 302.756 374.695 298.179 379.599 294.257 382.867 293.93 391.039 295.237 397.577 294.257 400.846 285.758 404.442 276.932 405.095 268.76 403.461 264.837 398.231 266.145 391.039 266.472 385.483 263.857 382.541 263.857 382.541 263.53 384.502 260.915 379.599 258.3 374.695 258.3 374.695 258.3 374.695 261.896 373.715 265.491 370.773 268.106 366.85 262.549 363.581 259.934 359.005 266.472 358.678 268.106 355.409 268.76 350.833 263.857 348.872 263.53 344.295 267.452 342.661 268.433 338.412 269.087 335.47 263.203 332.855 263.203 329.913 263.203 329.913 270.721 325.663 269.741 325.663",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Pelvis',
        coords: "244.571 411.633 249.801 404.769 252.743 394.635 254.377 383.521 254.05 372.734 254.05 363.581 254.05 363.581 254.05 357.371 250.782 356.39 247.513 355.409 240.648 353.775 240.648 353.775 232.149 355.409 224.958 362.274 218.747 375.022 215.478 382.867 212.863 394.635 217.44 405.095 222.343 415.883 226.592 415.883 232.149 414.902 239.668 419.805 240.321 429.612 239.014 433.207 239.994 439.745 242.283 448.571 248.82 461.319 259.607 467.857 269.414 468.184 276.278 463.934 280.201 466.222 282.489 463.934 288.7 466.876 300.468 468.51 309.62 463.934 317.465 453.801 321.061 443.341 321.715 434.842 319.1 427.977 321.715 419.805 329.56 414.248 334.79 418.824 338.713 411.306 343.616 397.904 344.27 386.136 341.655 377.31 337.732 369.138 332.175 359.986 325.637 355.083 318.446 354.102 309.62 357.698 306.678 366.85 307.005 378.945 308.313 390.059 309.62 399.538 311.908 407.384 311.908 407.384 317.139 409.999 316.812 411.633 316.485 413.267 316.158 424.055 316.158 424.055 315.177 429.285 307.659 436.476 302.756 442.687 295.891 447.59 288.373 453.474 282.162 457.07 282.162 457.07 280.528 455.108 279.547 456.089 278.566 457.07 276.605 457.396 276.605 457.396 273.663 454.781 269.087 452.82 264.837 449.551 260.915 445.629 256.012 441.379 248.166 434.842 245.878 428.631 245.878 422.093 245.878 422.093 244.571 417.844 244.244 418.171 243.917 418.498 243.917 412.287 244.571 411.633",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Left Femoral Head',
        coords: "234.437 432.227 229.534 438.764 225.939 435.822 222.67 432.227 219.728 426.996 222.67 422.093 224.304 419.805 229.207 426.67 234.764 432.227",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Right Femoral Head',
        coords: "324.33 431.573 327.599 427.65 334.463 422.093 339.693 426.343 337.732 435.495 334.463 442.033 329.56 440.725 328.579 436.476 324.33 431.573",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Left Proximal Femur',
        coords: "211.229 421.766 205.999 426.016 205.018 433.861 209.921 447.917 211.883 455.762 212.536 461.973 224.631 467.203 229.207 463.28 230.842 456.743 229.861 449.878 228.227 443.667 228.554 439.745 221.689 433.534 218.093 426.343 211.229 421.766",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Right Proximal Femur',
        coords: "347.865 422.42 347.865 422.42 352.769 418.824 353.095 426.996 353.422 435.169 353.422 435.169 353.422 435.169 348.846 448.898 346.231 462.953 340.674 469.491 329.56 463.934 327.926 456.089 332.175 447.59 336.751 440.725 341.655 428.631 347.865 422.42",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Left Femoral Shaft',
        coords: "213.19 461.646 223.65 466.876 228.88 462.627 233.13 511.659 240.321 569.517 248.493 611.685 239.994 615.934 232.149 612.011 231.496 585.861 226.592 548.596 221.689 515.255 218.093 486.489 213.19 461.646",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Right Femoral Shaft',
        coords: "330.214 463.934 340.02 470.145 345.25 464.588 336.424 521.792 326.945 589.13 326.291 598.936 328.906 614.953 324.984 613.973 318.446 620.183 312.562 615.28 311.582 607.435 314.85 594.687 318.773 569.844 323.022 532.252 329.56 481.259 330.214 463.934",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Left Patella',
        coords: "239.994 632.605 245.551 631.297 251.108 636.854 252.089 645.026 248.82 650.257 244.571 655.487 239.341 651.891 236.726 646.661 235.091 637.835 239.994 632.605",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Right Patella',
        coords: "312.562 631.951 318.773 631.297 323.022 637.835 322.695 645.68 319.754 651.891 315.831 654.833 310.601 652.218 307.005 646.661 307.005 640.45 308.64 634.566 312.562 631.951",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Left Medical Proximal Timia',
        coords: "252.416 649.93 257.646 649.276 260.915 653.525 256.012 671.177 256.012 671.177 257.973 675.1 256.012 675.1 254.05 675.1 249.474 675.1 249.474 675.1 248.166 667.908 245.878 658.755 245.878 658.755 247.186 652.218 247.513 652.545 247.84 652.872 251.108 649.603 252.416 649.93",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Right Medical Proximal Timia',
        coords: "299.16 652.218 302.102 649.276 302.102 649.276 305.044 648.622 307.005 651.564 308.966 654.506 312.235 656.14 312.235 656.14 312.235 656.14 313.216 660.717 313.543 664.639 313.87 668.562 313.87 673.465 313.87 673.465 308.64 675.753 304.717 675.753 303.083 668.235 300.794 659.409 299.16 652.218",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Left Lateral Proximal Timia',
        coords: "233.13 648.949 236.726 650.257 244.244 656.794 247.186 668.235 246.532 674.773 240.975 676.734 239.668 671.504 237.053 663.986 234.764 657.775 231.496 653.198 233.13 648.949",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Right Lateral Proximal Timia',
        coords: "324.33 648.949 328.906 648.949 328.579 654.833 325.311 661.044 320.734 668.235 320.407 675.426 316.158 674.773 315.504 669.543 314.85 660.063 319.1 655.16 324.33 648.949",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Left Fibula',
        coords: "229.534 652.872 235.418 661.371 237.706 674.446 237.053 699.616 239.014 742.437 243.917 806.179 245.225 831.349 242.936 839.194 239.014 835.925 239.994 825.465 240.975 812.39 238.687 789.181 234.437 743.418 233.784 709.749 233.13 682.618 231.496 666.928 228.554 658.429 229.534 652.872",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Right Fibula',
        coords: "324.003 665.62 326.618 659.082 330.868 652.872 332.502 658.429 330.541 666.928 328.252 677.061 328.579 688.829 328.579 701.904 328.252 715.633 324.984 765.646 321.715 799.315 320.407 823.831 322.695 836.579 320.407 839.521 317.138 837.233 315.831 828.734 317.138 813.37 319.1 787.547 321.061 759.435 323.349 723.478 324.33 685.887 324.003 665.62 ",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Left distal Femur',
        coords: "231.169 620.51 231.169 612.011 240.648 616.588 248.493 610.05 248.493 610.05 249.474 617.242 251.762 617.568 254.05 617.895 259.934 622.472 259.934 622.472 262.222 629.663 263.203 639.469 257.646 644.046 252.743 645.68 252.416 638.816 247.513 632.278 239.341 631.951 234.437 638.489 234.437 638.489 239.668 645.68 236.726 646.007 233.784 646.334 231.822 645.353 231.822 645.353 226.265 638.816 226.919 631.624 228.227 624.106 231.169 620.51",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Right distal Femur',
        coords: "310.274 613.646 318.446 619.53 318.446 619.53 324.657 610.377 326.945 614.953 329.233 619.53 330.868 623.779 330.868 623.779 333.156 631.951 333.156 639.143 329.233 645.026 324.33 646.334 323.349 639.796 320.407 634.566 319.1 631.297 312.235 631.951 307.986 634.893 306.678 643.392 306.678 643.392 307.986 645.68 303.736 644.7 299.487 643.719 296.872 635.22 297.852 639.796 298.833 644.373 298.833 644.373 298.833 644.373 297.526 633.586 298.506 624.76 298.506 624.76 298.506 625.414 303.083 621.818 307.659 618.222 309.62 613.319 309.62 613.319",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Left Tibial Shaft',
        coords: "240.648 676.734 247.186 675.753 255.685 676.407 253.397 695.366 253.397 721.19 254.377 766.3 257.646 799.641 259.607 817.947 248.493 818.274 247.84 799.641 245.878 777.087 243.917 752.897 242.283 730.016 242.283 702.231 241.629 687.194 240.648 676.734",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Right Tibial Shaft',
        coords: "305.698 677.061 313.543 675.1 319.427 678.695 319.1 698.308 317.792 725.439 316.158 753.878 314.197 787.22 311.908 811.736 312.235 816.966 300.141 818.274 303.409 795.392 305.698 776.106 306.678 759.435 307.005 737.861 307.332 713.998 306.351 694.059 305.698 677.061 ",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Left Distal Tibia',
        coords: "261.242 822.196 264.837 831.676 265.164 836.252 258.3 836.252 249.474 835.598 246.205 832.656 247.186 827.426 248.82 821.543 248.82 819.254 254.377 820.235 261.242 822.196",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Right Distal Tibia',
        coords: "300.468 821.543 297.199 827.426 294.584 834.945 300.794 837.887 309.947 836.906 315.831 832.656 314.523 826.773 312.889 820.562 312.235 818.601 306.351 819.908 300.468 821.543",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Left Feet',
        coords: "211.883 872.536 217.766 865.345 228.227 856.192 234.437 850.635 240.321 841.809 240.321 841.809 244.571 842.136 246.532 839.194 248.493 836.252 248.493 836.252 248.493 836.252 259.28 838.214 267.126 842.79 267.126 842.79 262.876 846.385 262.549 847.366 262.222 848.347 265.818 850.635 261.242 855.211 256.665 859.788 256.012 861.095 256.012 861.095 252.743 873.19 249.147 883.977 242.936 888.88 237.706 886.592 230.515 885.284 226.592 885.284 223.65 882.669 220.382 881.689 220.382 881.689 224.958 878.747 220.708 878.42 216.459 878.093 216.459 878.093 216.459 878.093 217.44 874.824 213.517 874.497 211.883 872.536",
        shape: "poly",
        link: "#",
        color: 'red'
    },
    {
        partId: 13,
        name: 'Right Feet',
        coords: "312.235 883.65 319.427 886.265 321.061 883.65 327.272 886.592 331.194 883.977 334.463 886.265 337.078 883.977 341.001 886.265 342.635 883.323 346.231 882.016 343.943 875.478 338.713 871.882 334.136 866.325 329.887 860.441 326.618 855.538 322.369 850.962 322.369 850.962 326.291 843.771 320.407 842.463 314.523 841.155 313.87 838.214 313.87 838.214 308.64 837.887 303.736 838.54 298.833 842.463 296.545 846.385 297.852 848.674 296.872 854.558 302.756 859.788 305.698 864.364 306.351 870.575 307.005 877.766 312.235 883.65",
        shape: "poly",
        link: "#",
        color: 'red'
    }
];
