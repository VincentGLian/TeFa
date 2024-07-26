public int ExtremLightUni(CImage Inp, int hWind, Form1 fm1)
/* The extreme filter for color or grayscale images with variable hWind.
The filter finds in the (2*hWind+1)-neighborhood of the actual pixel (x,y)
the color "Color1" with minimum and the color "Color2" with the maximum
lightness. "Color1" is assigned to the output pixel if its lightness
is closer to the lightness of the central pixel than the lightness of
"Color2". --*/
{
    byte[] CenterColor = new byte[3], Color = new byte[3], Color1 = new byte[3], Color2 = new byte[3];
    int c, k, nbyte = 3, x;
    if (Inp.N_Bits == 8)
        nbyte = 1;
    for (int y = 0; y < height; y++) // ====================================
    {
        if (y % jump == jump - 1)
            fm1.progressBar1.PerformStep();
        for (x = 0; x < width; x++) //======================================
        {
            for (c = 0; c < nbyte; c++)
                Color2[c] = Color1[c] = Color[c] =
                    CenterColor[c] = Inp.Grid[c + nbyte *
                                                      (x + y * width)];
            int MinLight = 1000, MaxLight = 0;
            for (k = -hWind; k <= hWind; k++) //==============================
            {
                if (y + k >= 0 && y + k < height)
                    for (int i = -hWind; i <= hWind; i++) //==========================
                    {
                        if (x + i >= 0 && x + i < width) // && (i > 0 || k > 0))
                        {
                            for (c = 0; c < nbyte; c++)
                                Color[c] = Inp.Grid[c + nbyte * (x + i + (y + k) * width)];
                            int light;
                            if (nbyte == 3)
                                light = MaxC(Color[2], Color[1], Color[0]);
                            else
                                light = Color[0];
                            if (light < MinLight)
                            {
                                MinLight = light;
                                for (c = 0; c < nbyte; c++)
                                    Color1[c] = Color[c];
                            }
                            if (light > MaxLight)
                            {
                                MaxLight = light;
                                for (c = 0; c < nbyte; c++)
                                    Color2[c] = Color[c];
                            }
                        }
                    } //=============== end for (int i... =======================
            }         //=================== end for (int k... ======================
            int CenterLight = MaxC(CenterColor[2], CenterColor[1],
                                   CenterColor[0]);
            int dist1 = 0, dist2 = 0;
            dist1 = CenterLight - MinLight;
            dist2 = MaxLight - CenterLight;
            if (dist1 < dist2)
                for (c = 0; c < nbyte; c++)
                    Grid[c + 3 * x + y * width * 3] =
                        Color1[c]; // Min
            else
                for (c = 0; c < nbyte; c++)
                    Grid[c + 3 * x + y * width * 3] =
                        Color2[c]; // Max
        }                          //================== end for (int x... ==========================
    }                              //==================== end for (int y... ==========================
    // fm1.progressBar1.Visible = false;
    return 1;
} //********************** end ExtremLightUni ***************************