// This file was auto-generated. Please do not edit it.

import * as p5 from '....index';

declare module '....index' {
    interface p5InstanceExtensions {
        /**
         *   Creates a new p5.Shader object from the provided
         *   vertex and fragment shader files. The shader files
         *   are loaded asynchronously in the background, so
         *   this method should be used in preload().
         *
         *   Shaders can alter the positioning of shapes drawn
         *   with them. To ensure consistency in rendering,
         *   it's recommended to use the vertex shader in the
         *   createShader example.
         *
         *   Note, shaders can only be used in WEBGL mode.
         *   @param vertFilename path to file containing vertex
         *   shader source code
         *   @param fragFilename path to file containing
         *   fragment shader source code
         *   @param [callback] callback to be executed after
         *   loadShader completes. On success, the p5.Shader
         *   object is passed as the first argument.
         *   @param [errorCallback] callback to be executed
         *   when an error occurs inside loadShader. On error,
         *   the error is passed as the first argument.
         *   @return a shader object created from the provided
         *   vertex and fragment shader files.
         */
        loadShader(
            vertFilename: string,
            fragFilename: string,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Shader;

        /**
         *   Creates a new p5.Shader object from the provided
         *   vertex and fragment shader code. Note, shaders can
         *   only be used in WEBGL mode.
         *
         *   Shaders can alter the positioning of shapes drawn
         *   with them. To ensure consistency in rendering,
         *   it's recommended to use the vertex shader shown in
         *   the example below.
         *   @param vertSrc source code for the vertex shader
         *   @param fragSrc source code for the fragment shader
         *   @return a shader object created from the provided
         *   vertex and fragment shaders.
         */
        createShader(vertSrc: string, fragSrc: string): Shader;

        /**
         *   Creates a new p5.Shader using only a fragment
         *   shader, as a convenience method for creating image
         *   effects. It's like createShader() but with a
         *   default vertex shader included.
         *   createFilterShader() is intended to be used along
         *   with filter() for filtering the contents of a
         *   canvas. A filter shader will not be applied to any
         *   geometries.
         *
         *   The fragment shader receives some uniforms:
         *
         *   - sampler2D tex0, which contains the canvas
         *   contents as a texture
         *   - vec2 canvasSize, which is the p5 width and
         *   height of the canvas (not including pixel density)
         *   - vec2 texelSize, which is the size of a physical
         *   pixel including pixel density
         *   (1.0/(width*density), 1.0/(height*density))
         *
         *   For more info about filters and shaders, see Adam
         *   Ferriss' repo of shader examples or the
         *   introduction to shaders page.
         *   @param fragSrc source code for the fragment shader
         *   @return a shader object created from the provided
         *   fragment shader.
         */
        createFilterShader(fragSrc: string): Shader;

        /**
         *   Sets the p5.Shader object to be used to render
         *   subsequent shapes. Shaders can alter the
         *   positioning of shapes drawn with them. To ensure
         *   consistency in rendering, it's recommended to use
         *   the vertex shader in the createShader example.
         *
         *   Custom shaders can be created using the
         *   createShader() and loadShader() functions.
         *
         *   Use resetShader() to restore the default shaders.
         *
         *   Additional Information: The shader will be used
         *   for:
         *
         *   - Fills when a texture is enabled if it includes a
         *   uniform sampler2D.
         *   - Fills when lights are enabled if it includes the
         *   attribute aNormal, or if it has any of the
         *   following uniforms: uUseLighting,
         *   uAmbientLightCount, uDirectionalLightCount,
         *   uPointLightCount, uAmbientColor,
         *   uDirectionalDiffuseColors,
         *   uDirectionalSpecularColors, uPointLightLocation,
         *   uPointLightDiffuseColors,
         *   uPointLightSpecularColors, uLightingDirection, or
         *   uSpecular.
         *   - Fills whenever there are no lights or textures.
         *   - Strokes if it includes the uniform
         *   uStrokeWeight. Note: This behavior is considered
         *   experimental, and changes are planned in future
         *   releases.
         *
         *   Note, shaders can only be used in WEBGL mode.
         *   @param s the p5.Shader object to use for rendering
         *   shapes.
         *   @chainable
         */
        shader(s: Shader): p5;

        /**
         *   Restores the default shaders. Code that runs after
         *   resetShader() will not be affected by the shader
         *   previously set by shader()
         *   @chainable
         */
        resetShader(): p5;

        /**
         *   Sets the texture that will be used to render
         *   subsequent shapes. A texture is like a "skin" that
         *   wraps around a 3D geometry. Currently supported
         *   textures are images, video, and offscreen renders.
         *
         *   To texture a geometry created with beginShape(),
         *   you will need to specify uv coordinates in
         *   vertex().
         *
         *   Note, texture() can only be used in WEBGL mode.
         *
         *   You can view more materials in this example.
         *   @param tex image to use as texture
         *   @chainable
         */
        texture(tex: Image | MediaElement | Graphics | Framebuffer): p5;

        /**
         *   Sets the coordinate space for texture mapping. The
         *   default mode is IMAGE which refers to the actual
         *   coordinates of the image. NORMAL refers to a
         *   normalized space of values ranging from 0 to 1.
         *   With IMAGE, if an image is 100×200 pixels, mapping
         *   the image onto the entire size of a quad would
         *   require the points (0,0) (100, 0) (100,200)
         *   (0,200). The same mapping in NORMAL is (0,0) (1,0)
         *   (1,1) (0,1).
         *   @param mode either IMAGE or NORMAL
         */
        textureMode(mode: TEXTURE_MODE): void;

        /**
         *   Sets the global texture wrapping mode. This
         *   controls how textures behave when their uv's go
         *   outside of the 0 to 1 range. There are three
         *   options: CLAMP, REPEAT, and MIRROR. CLAMP causes
         *   the pixels at the edge of the texture to extend to
         *   the bounds. REPEAT causes the texture to tile
         *   repeatedly until reaching the bounds. MIRROR works
         *   similarly to REPEAT but it flips the texture with
         *   every new tile.
         *
         *   REPEAT & MIRROR are only available if the texture
         *   is a power of two size (128, 256, 512, 1024,
         *   etc.).
         *
         *   This method will affect all textures in your
         *   sketch until a subsequent textureWrap() call is
         *   made.
         *
         *   If only one argument is provided, it will be
         *   applied to both the horizontal and vertical axes.
         *   @param wrapX either CLAMP, REPEAT, or MIRROR
         *   @param [wrapY] either CLAMP, REPEAT, or MIRROR
         */
        textureWrap(wrapX: WRAP_X, wrapY?: WRAP_Y): void;

        /**
         *   Sets the current material as a normal material. A
         *   normal material is not affected by light. It is
         *   often used as a placeholder material when
         *   debugging.
         *
         *   Surfaces facing the X-axis become red, those
         *   facing the Y-axis become green, and those facing
         *   the Z-axis become blue.
         *
         *   You can view more materials in this example.
         *   @chainable
         */
        normalMaterial(): p5;

        /**
         *   Sets the ambient color of the material. The
         *   ambientMaterial() color represents the components
         *   of the ambientLight() color that the object
         *   reflects.
         *
         *   Consider an ambientMaterial() with the color
         *   yellow (255, 255, 0). If the ambientLight() emits
         *   the color white (255, 255, 255), then the object
         *   will appear yellow as it will reflect the red and
         *   green components of the light. If the
         *   ambientLight() emits the color red (255, 0, 0),
         *   then the object will appear red as it will reflect
         *   the red component of the light. If the
         *   ambientLight() emits the color blue (0, 0, 255),
         *   then the object will appear black, as there is no
         *   component of the light that it can reflect.
         *
         *   You can view more materials in this example.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @chainable
         */
        ambientMaterial(v1: number, v2: number, v3: number): p5;

        /**
         *   Sets the ambient color of the material. The
         *   ambientMaterial() color represents the components
         *   of the ambientLight() color that the object
         *   reflects.
         *
         *   Consider an ambientMaterial() with the color
         *   yellow (255, 255, 0). If the ambientLight() emits
         *   the color white (255, 255, 255), then the object
         *   will appear yellow as it will reflect the red and
         *   green components of the light. If the
         *   ambientLight() emits the color red (255, 0, 0),
         *   then the object will appear red as it will reflect
         *   the red component of the light. If the
         *   ambientLight() emits the color blue (0, 0, 255),
         *   then the object will appear black, as there is no
         *   component of the light that it can reflect.
         *
         *   You can view more materials in this example.
         *   @param gray number specifying value between white
         *   and black
         *   @chainable
         */
        ambientMaterial(gray: number): p5;

        /**
         *   Sets the ambient color of the material. The
         *   ambientMaterial() color represents the components
         *   of the ambientLight() color that the object
         *   reflects.
         *
         *   Consider an ambientMaterial() with the color
         *   yellow (255, 255, 0). If the ambientLight() emits
         *   the color white (255, 255, 255), then the object
         *   will appear yellow as it will reflect the red and
         *   green components of the light. If the
         *   ambientLight() emits the color red (255, 0, 0),
         *   then the object will appear red as it will reflect
         *   the red component of the light. If the
         *   ambientLight() emits the color blue (0, 0, 255),
         *   then the object will appear black, as there is no
         *   component of the light that it can reflect.
         *
         *   You can view more materials in this example.
         *   @param color color as a p5.Color, as an array, or
         *   as a CSS string
         *   @chainable
         */
        ambientMaterial(color: Color | number[] | string): p5;

        /**
         *   Sets the emissive color of the material. An
         *   emissive material will display the emissive color
         *   at full strength regardless of lighting. This can
         *   give the appearance that the object is glowing.
         *
         *   Note, "emissive" is a misnomer in the sense that
         *   the material does not actually emit light that
         *   will affect surrounding objects.
         *
         *   You can view more materials in this example.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @param [alpha] alpha value relative to current
         *   color range (default is 0-255)
         *   @chainable
         */
        emissiveMaterial(v1: number, v2: number, v3: number, alpha?: number): p5;

        /**
         *   Sets the emissive color of the material. An
         *   emissive material will display the emissive color
         *   at full strength regardless of lighting. This can
         *   give the appearance that the object is glowing.
         *
         *   Note, "emissive" is a misnomer in the sense that
         *   the material does not actually emit light that
         *   will affect surrounding objects.
         *
         *   You can view more materials in this example.
         *   @param gray number specifying value between white
         *   and black
         *   @chainable
         */
        emissiveMaterial(gray: number): p5;

        /**
         *   Sets the emissive color of the material. An
         *   emissive material will display the emissive color
         *   at full strength regardless of lighting. This can
         *   give the appearance that the object is glowing.
         *
         *   Note, "emissive" is a misnomer in the sense that
         *   the material does not actually emit light that
         *   will affect surrounding objects.
         *
         *   You can view more materials in this example.
         *   @param color color as a p5.Color, as an array, or
         *   as a CSS string
         *   @chainable
         */
        emissiveMaterial(color: Color | number[] | string): p5;

        /**
         *   Sets the specular color of the material. A
         *   specular material is reflective (shiny). The
         *   shininess can be controlled by the shininess()
         *   function.
         *
         *   Like ambientMaterial(), the specularMaterial()
         *   color is the color the object will reflect under
         *   ambientLight(). However unlike ambientMaterial(),
         *   for all other types of lights (directionalLight(),
         *   pointLight(), spotLight()), a specular material
         *   will reflect the color of the light source. This
         *   is what gives it its "shiny" appearance.
         *
         *   You can view more materials in this example.
         *   @param gray number specifying value between white
         *   and black.
         *   @param [alpha] alpha value relative to current
         *   color range (default is 0-255)
         *   @chainable
         */
        specularMaterial(gray: number, alpha?: number): p5;

        /**
         *   Sets the specular color of the material. A
         *   specular material is reflective (shiny). The
         *   shininess can be controlled by the shininess()
         *   function.
         *
         *   Like ambientMaterial(), the specularMaterial()
         *   color is the color the object will reflect under
         *   ambientLight(). However unlike ambientMaterial(),
         *   for all other types of lights (directionalLight(),
         *   pointLight(), spotLight()), a specular material
         *   will reflect the color of the light source. This
         *   is what gives it its "shiny" appearance.
         *
         *   You can view more materials in this example.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @param [alpha] alpha value relative to current
         *   color range (default is 0-255)
         *   @chainable
         */
        specularMaterial(v1: number, v2: number, v3: number, alpha?: number): p5;

        /**
         *   Sets the specular color of the material. A
         *   specular material is reflective (shiny). The
         *   shininess can be controlled by the shininess()
         *   function.
         *
         *   Like ambientMaterial(), the specularMaterial()
         *   color is the color the object will reflect under
         *   ambientLight(). However unlike ambientMaterial(),
         *   for all other types of lights (directionalLight(),
         *   pointLight(), spotLight()), a specular material
         *   will reflect the color of the light source. This
         *   is what gives it its "shiny" appearance.
         *
         *   You can view more materials in this example.
         *   @param color color as a p5.Color, as an array, or
         *   as a CSS string
         *   @chainable
         */
        specularMaterial(color: Color | number[] | string): p5;

        /**
         *   Sets the amount of gloss ("shininess") of a
         *   specularMaterial(). The default and minimum value
         *   is 1.
         *   @param shine degree of shininess
         *   @chainable
         */
        shininess(shine: number): p5;

        /**
         *   Sets the metalness property of a material used in
         *   3D rendering. The metalness property controls the
         *   degree to which the material appears metallic. A
         *   higher metalness value makes the material look
         *   more metallic, while a lower value makes it appear
         *   less metallic.
         *
         *   The default and minimum value is 0, indicating a
         *   non-metallic appearance.
         *
         *   Unlike other materials, metals exclusively rely on
         *   reflections, particularly those produced by
         *   specular lights (mirrorLike lights). They don't
         *   incorporate diffuse or ambient lighting. Metals
         *   use a fill color to influence the overall color of
         *   their reflections. Pick a fill color, and you can
         *   easily change the appearance of the metal
         *   surfaces. When no fill color is provided, it
         *   defaults to using white.
         *   @param metallic - The degree of metalness.
         */
        metalness(metallic: number): void;
    }
}
