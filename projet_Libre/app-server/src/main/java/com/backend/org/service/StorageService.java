package com.backend.org.service;
import com.backend.org.model.ProductEntity;
import com.backend.org.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

@Service
public class StorageService {

    @Autowired
    private ProductRepo productRepo;
    private final String FOLDER_PATH="E:/study/hafidi/prjlibre/images/";

    public void uploadProductImage(MultipartFile file) throws IOException {
        String filePath=FOLDER_PATH+file.getOriginalFilename();
        file.transferTo(new File(filePath));
    }
    public byte[] getPhoto(Integer id) throws Exception{
        ProductEntity p= productRepo.findById(id).get();
        String filePath=FOLDER_PATH+p.getProductPhoto();
        byte[] images = Files.readAllBytes(new File(filePath).toPath());
        return images;
    }


}